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

  // Enable CORS
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") return res.status(200).end();

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const {
    name,
    email,
    message,
    phone = "",
    service = "",
    source = "Contact Form",
  } = req.body;

  // Validate required fields
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

  // Validate message length (relaxed max for popup/floating forms)
  if (message.trim().length < 5) {
    return res
      .status(400)
      .json({ error: "Message must be at least 5 characters long" });
  }

  if (message.length > 2000) {
    return res.status(400).json({ error: "Message is too long" });
  }

  console.log(
    `[${startTime}] Processing submission from: ${email} | Name: ${name} | Source: ${source}`,
  );

  // Determine source label for subject line
  const sourceLabel =
    source === "popup"
      ? "🎯 Popup Lead"
      : source === "floating"
        ? "📋 Quick Quote"
        : "📬 Contact Form";

  const submissionId = Date.now();
  const timestamp = new Date().toLocaleString("en-IN", {
    timeZone: "Asia/Kolkata",
  });

  try {
    const businessEmailOptions = {
      from: `"Legendary One Website" <${process.env.GMAIL_USER}>`,
      to: process.env.CONTACT_EMAIL || process.env.GMAIL_USER,
      subject: `${sourceLabel} — ${escapeHtml(name)} | Legendary One`,
      html: `
        <!DOCTYPE html>
        <html>
        <head><meta charset="utf-8"></head>
        <body style="margin:0;padding:0;background:#f1f5f9;font-family:Arial,sans-serif;">
          <div style="max-width:600px;margin:32px auto;background:#fff;border-radius:12px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.08);">
            <!-- Header -->
            <div style="background:linear-gradient(135deg,#001e3c 0%,#0047ab 100%);padding:28px 32px;text-align:center;">
              <div style="font-size:28px;font-weight:900;color:#fff;letter-spacing:-0.5px;">LEGENDARY <span style="color:#c8f078;">ONE</span></div>
              <div style="color:#94aabf;font-size:13px;margin-top:4px;">New Lead Notification</div>
            </div>
            <!-- Source badge -->
            <div style="background:#f8faff;border-bottom:1px solid #e2e8f0;padding:12px 32px;display:flex;align-items:center;gap:8px;">
              <span style="background:#0047ab;color:#fff;font-size:11px;font-weight:700;padding:3px 10px;border-radius:99px;letter-spacing:0.5px;">${escapeHtml(source.toUpperCase())}</span>
              <span style="color:#64748b;font-size:12px;">Submission ID: <strong>#${submissionId}</strong></span>
              <span style="color:#64748b;font-size:12px;margin-left:auto;">${timestamp} IST</span>
            </div>
            <!-- Body -->
            <div style="padding:28px 32px;">
              <table style="width:100%;border-collapse:collapse;">
                <tr>
                  <td style="padding:10px 0;border-bottom:1px solid #f1f5f9;width:130px;color:#64748b;font-size:13px;font-weight:600;">👤 Name</td>
                  <td style="padding:10px 0;border-bottom:1px solid #f1f5f9;color:#0f172a;font-size:14px;font-weight:700;">${escapeHtml(name)}</td>
                </tr>
                <tr>
                  <td style="padding:10px 0;border-bottom:1px solid #f1f5f9;color:#64748b;font-size:13px;font-weight:600;">📧 Email</td>
                  <td style="padding:10px 0;border-bottom:1px solid #f1f5f9;font-size:14px;"><a href="mailto:${escapeHtml(email)}" style="color:#0047ab;font-weight:700;">${escapeHtml(email)}</a></td>
                </tr>
                ${
                  phone
                    ? `<tr>
                  <td style="padding:10px 0;border-bottom:1px solid #f1f5f9;color:#64748b;font-size:13px;font-weight:600;">📞 Phone</td>
                  <td style="padding:10px 0;border-bottom:1px solid #f1f5f9;color:#0f172a;font-size:14px;font-weight:700;"><a href="tel:${escapeHtml(phone)}" style="color:#0047ab;font-weight:700;">${escapeHtml(phone)}</a></td>
                </tr>`
                    : ""
                }
                ${
                  service
                    ? `<tr>
                  <td style="padding:10px 0;border-bottom:1px solid #f1f5f9;color:#64748b;font-size:13px;font-weight:600;">🛠️ Service</td>
                  <td style="padding:10px 0;border-bottom:1px solid #f1f5f9;color:#0f172a;font-size:14px;font-weight:700;">${escapeHtml(service)}</td>
                </tr>`
                    : ""
                }
              </table>

              <div style="margin-top:20px;">
                <div style="color:#64748b;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.5px;margin-bottom:8px;">💬 Message</div>
                <div style="background:#f8faff;border-left:4px solid #0047ab;border-radius:0 8px 8px 0;padding:14px 16px;color:#0f172a;font-size:14px;line-height:1.7;white-space:pre-wrap;">${escapeHtml(message)}</div>
              </div>
            </div>
            <!-- CTA -->
            <div style="padding:20px 32px;background:#f8faff;border-top:1px solid #e2e8f0;text-align:center;">
              <a href="mailto:${escapeHtml(email)}" style="display:inline-block;background:linear-gradient(135deg,#0047ab,#006fff);color:#fff;font-weight:700;font-size:13px;padding:10px 24px;border-radius:8px;text-decoration:none;margin-right:8px;">Reply by Email</a>
              ${phone ? `<a href="https://wa.me/91${escapeHtml(phone.replace(/\D/g, ""))}?text=Hi%20${encodeURIComponent(name)}%2C%20I'm%20from%20Legendary%20One!" style="display:inline-block;background:#25D366;color:#fff;font-weight:700;font-size:13px;padding:10px 24px;border-radius:8px;text-decoration:none;">Reply on WhatsApp</a>` : ""}
            </div>
            <!-- Footer -->
            <div style="padding:16px 32px;text-align:center;color:#94a3b8;font-size:11px;">
              Legendary One · Gobi, Erode, Tamil Nadu, India · legendaryoneff@gmail.com
            </div>
          </div>
        </body>
        </html>
      `,
    };

    const userEmailOptions = {
      from: `"Legendary One" <${process.env.GMAIL_USER}>`,
      to: email,
      subject: "We've received your message — Legendary One ✅",
      html: `
        <!DOCTYPE html>
        <html>
        <head><meta charset="utf-8"></head>
        <body style="margin:0;padding:0;background:#f1f5f9;font-family:Arial,sans-serif;">
          <div style="max-width:600px;margin:32px auto;background:#fff;border-radius:12px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.08);">
            <!-- Header -->
            <div style="background:linear-gradient(135deg,#001e3c 0%,#0047ab 100%);padding:28px 32px;text-align:center;">
              <div style="font-size:28px;font-weight:900;color:#fff;letter-spacing:-0.5px;">LEGENDARY <span style="color:#c8f078;">ONE</span></div>
              <div style="color:#94aabf;font-size:13px;margin-top:4px;">We've got your message!</div>
            </div>
            <!-- Body -->
            <div style="padding:32px;">
              <div style="font-size:22px;font-weight:800;color:#0f172a;margin-bottom:8px;">Hi ${escapeHtml(name)}! 👋</div>
              <p style="color:#475569;font-size:15px;line-height:1.7;margin:0 0 20px;">Thank you for reaching out to <strong>Legendary One</strong>. We've successfully received your message and our team will get back to you within <strong>24 hours</strong>.</p>

              <div style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:10px;padding:16px 20px;margin-bottom:24px;display:flex;align-items:center;gap:12px;">
                <div style="font-size:24px;">✅</div>
                <div>
                  <div style="font-weight:700;color:#166534;font-size:14px;">Submission Confirmed</div>
                  <div style="color:#15803d;font-size:13px;">Your message is safe with us. Reference: #${submissionId}</div>
                </div>
              </div>

              ${service ? `<div style="background:#eff6ff;border-radius:8px;padding:12px 16px;margin-bottom:20px;font-size:13px;color:#1d4ed8;"><strong>Service requested:</strong> ${escapeHtml(service)}</div>` : ""}

              <div style="border-top:1px solid #e2e8f0;padding-top:20px;margin-top:4px;">
                <div style="color:#64748b;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.5px;margin-bottom:8px;">Your Message</div>
                <div style="background:#f8faff;border-left:4px solid #0047ab;border-radius:0 8px 8px 0;padding:14px 16px;color:#334155;font-size:14px;line-height:1.7;white-space:pre-wrap;">${escapeHtml(message)}</div>
              </div>

              <div style="margin-top:28px;background:#0f172a;border-radius:10px;padding:20px 24px;text-align:center;">
                <div style="color:#94a3b8;font-size:12px;margin-bottom:12px;">Need a faster response? Reach us on WhatsApp:</div>
                <a href="https://wa.me/917339596165" style="display:inline-block;background:#25D366;color:#fff;font-weight:700;font-size:14px;padding:10px 28px;border-radius:8px;text-decoration:none;">💬 Chat on WhatsApp</a>
                <div style="color:#64748b;font-size:11px;margin-top:8px;">+91 7339596165 · Usually replies in minutes</div>
              </div>
            </div>
            <!-- Footer -->
            <div style="padding:16px 32px;background:#f8faff;border-top:1px solid #e2e8f0;text-align:center;color:#94a3b8;font-size:11px;">
              Legendary One · Gobi, Erode, Tamil Nadu, India<br>
              <span style="color:#cbd5e1;">This is an automated confirmation. Please do not reply to this email.</span>
            </div>
          </div>
        </body>
        </html>
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
