export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const pin = req.query.pin;

  if (!pin || typeof pin !== "string") {
    return res.status(400).json({ error: "A valid PIN is required" });
  }

  try {
    const apiURL =
      "https://www.sbtet.telangana.gov.in/api/api/PreExamination/getAttendanceReport";

    const response = await fetch(
      `${apiURL}?Pin=${encodeURIComponent(pin)}`
    );

    if (!response.ok) {
      return res.status(502).json({
        error: "SBTET API request failed",
        upstreamStatus: response.status
      });
    }

    const data = await response.json();

    return res.status(200).json(data);
  } catch (error) {
    console.error("Attendance API error:", error);

    return res.status(500).json({
      error: "Failed to retrieve attendance data"
    });
  }
}