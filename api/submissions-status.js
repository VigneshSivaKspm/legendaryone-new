import fs from "fs/promises";

// Backup submissions file
const SUBMISSIONS_FILE = "/tmp/submissions.json";

export default async function handler(req, res) {
  // Enable CORS
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  // Handle preflight requests
  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  // Only allow GET
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const data = await fs.readFile(SUBMISSIONS_FILE, "utf-8");
    const submissions = JSON.parse(data);

    // Return basic stats (don't expose full data)
    return res.status(200).json({
      total: submissions.length,
      sent: submissions.filter((s) => s.status === "sent").length,
      pending: submissions.filter((s) => s.status === "pending").length,
      errors: submissions.filter((s) => s.status === "error").length,
      lastSubmission: submissions[submissions.length - 1] || null,
    });
  } catch (err) {
    // File doesn't exist yet or no submissions
    return res.status(200).json({
      total: 0,
      sent: 0,
      pending: 0,
      errors: 0,
      lastSubmission: null,
    });
  }
}
