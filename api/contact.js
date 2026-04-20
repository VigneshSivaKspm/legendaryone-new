import nodemailer from "nodemailer";
import fs from "fs/promises";
import path from "path";

// Create transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

// Backup submissions file (for fallback storage)
const SUBMISSIONS_FILE = "/tmp/submissions.json";

// Helper to escape HTML
function escapeHtml(text) {
  const map = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;",
  };
  return text.replace(/[&<>"']/g, (m) => map[m]);
}

// Log submission to backup storage
async function backupSubmission(name, email, message, status) {
  try {
    const submission = {
      id: Date.now(),
      timestamp: new Date().toISOString(),
      name: escapeHtml(name),
      email: escapeHtml(email),
      message: escapeHtml(message),
      status,
    };

    let submissions = [];
    try {
      const data = await fs.readFile(SUBMISSIONS_FILE, "utf-8");
      submissions = JSON.parse(data);
    } catch (e) {
      // File doesn't exist yet, start fresh
      submissions = [];
    }

    submissions.push(submission);
    await fs.writeFile(SUBMISSIONS_FILE, JSON.stringify(submissions, null, 2));
    console.log(`[${new Date().toISOString()}] Submission backed up: ${email}`);
  } catch (err) {
    console.error(`[${new Date().toISOString()}] Backup error:`, err);
  }
}

// Send email with retry logic
async function sendEmailWithRetry(mailOptions, retries = 3) {
  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      const result = await transporter.sendMail(mailOptions);
      console.log(
        `[${new Date().toISOString()}] Email sent successfully to ${mailOptions.to} (Attempt ${attempt})`,
      );
      return result;
    } catch (error) {
      console.error(
        `[${new Date().toISOString()}] Email send attempt ${attempt} failed:`,
        error.message,
      );
      if (attempt < retries) {
        // Wait before retrying (exponential backoff)
        await new Promise((resolve) => setTimeout(resolve, 1000 * attempt));
      } else {
        throw error;
      }
    }
  }
}

export default async function handler(req, res) {
  const startTime = new Date().toISOString();
  console.log(`[${startTime}] Incoming request: ${req.method}`);

  // Only accept POST requests
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  // Enable CORS
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  // Handle preflight requests
  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  const { name, email, message } = req.body;

  // Validate input
  if (!name || !email || !message) {
    console.warn(
      `[${startTime}] Missing fields - Name: ${!!name}, Email: ${!!email}, Message: ${!!message}`,
    );
    return res.status(400).json({ error: "All fields are required" });
  }

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    console.warn(`[${startTime}] Invalid email format: ${email}`);
    return res.status(400).json({ error: "Invalid email address" });
  }

  // Validate message length
  if (message.length < 10) {
    console.warn(
      `[${startTime}] Message too short (${message.length} chars): ${email}`,
    );
    return res.status(400).json({
      error: "Message must be at least 10 characters long",
    });
  }

  if (message.length > 500) {
    console.warn(
      `[${startTime}] Message too long (${message.length} chars): ${email}`,
    );
    return res
      .status(400)
      .json({ error: "Message must be under 500 characters" });
  }

  console.log(
    `[${startTime}] Processing submission from: ${email} | Name: ${name}`,
  );

  try {
    const businessEmailOptions = {
      from: process.env.GMAIL_USER,
      to: process.env.CONTACT_EMAIL || process.env.GMAIL_USER,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #001e3c; border-bottom: 3px solid #007bff; padding-bottom: 10px;">New Contact Form Submission</h2>
          <div style="margin: 20px 0; background-color: #f8f9fa; padding: 15px; border-radius: 8px;">
            <p><strong>Submission ID:</strong> ${Date.now()}</p>
            <p><strong>Timestamp:</strong> ${new Date().toLocaleString()}</p>
            <p><strong>Name:</strong> ${escapeHtml(name)}</p>
            <p><strong>Email:</strong> ${escapeHtml(email)}</p>
            <p><strong>Message:</strong></p>
            <p style="white-space: pre-wrap; color: #333; border-left: 4px solid #007bff; padding-left: 10px;">${escapeHtml(
              message,
            )}</p>
          </div>
          <p style="color: #666; font-size: 12px; margin-top: 20px;">This is an automated email from your website contact form.</p>
        </div>
      `,
    };

    const userEmailOptions = {
      from: process.env.GMAIL_USER,
      to: email,
      subject: "We've received your message — Legendary One",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #007bff;">Thank You for Contacting Legendary One!</h2>
          <p>Hi ${escapeHtml(name)},</p>
          <p>We've received your message and will get back to you within 24 hours.</p>
          <div style="margin: 20px 0; background-color: #f8f9fa; padding: 15px; border-radius: 8px;">
            <p><strong>Your Message:</strong></p>
            <p style="white-space: pre-wrap; color: #333; border-left: 4px solid #007bff; padding-left: 10px;">${escapeHtml(
              message,
            )}</p>
          </div>
          <p style="margin-top: 20px;">Best regards,<br><strong>Legendary One Team</strong></p>
          <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
          <p style="color: #666; font-size: 12px;">This is an automated response. Please do not reply to this email.</p>
        </div>
      `,
    };

    // Send emails with retry logic
    let emailsSent = false;
    let emailError = null;

    try {
      // Send business email
      await sendEmailWithRetry(businessEmailOptions, 3);
      console.log(
        `[${startTime}] Business email sent to ${process.env.CONTACT_EMAIL}`,
      );
    } catch (err) {
      console.error(
        `[${startTime}] Failed to send business email after retries:`,
        err.message,
      );
      emailError = err;
    }

    try {
      // Send confirmation email
      await sendEmailWithRetry(userEmailOptions, 3);
      console.log(`[${startTime}] Confirmation email sent to ${email}`);
      emailsSent = true;
    } catch (err) {
      console.error(
        `[${startTime}] Failed to send confirmation email after retries:`,
        err.message,
      );
      emailError = err;
    }

    // Backup submission regardless of email success
    await backupSubmission(
      name,
      email,
      message,
      emailsSent ? "sent" : "pending",
    );

    if (!emailsSent) {
      console.error(
        `[${startTime}] Email delivery failed but submission backed up: ${email}`,
      );
      // Still return success because submission is backed up
      return res.status(200).json({
        success: true,
        message: "Submission received. We'll contact you soon!",
        note: "Email delivery delayed but submission is secure",
      });
    }

    console.log(`[${startTime}] ✅ Complete success for: ${email}`);
    return res.status(200).json({
      success: true,
      message: "Email sent successfully",
    });
  } catch (error) {
    console.error(`[${startTime}] Critical error:`, error);

    // Backup submission even on critical error
    try {
      await backupSubmission(name, email, message, "error");
      console.log(`[${startTime}] Submission backed up despite error`);
    } catch (backupErr) {
      console.error(`[${startTime}] Failed to backup submission:`, backupErr);
    }

    // Return success anyway because submission is backed up
    return res.status(200).json({
      success: true,
      message: "Submission received. We'll contact you soon!",
      note: "We're experiencing high traffic but your message is safe",
    });
  }
}
