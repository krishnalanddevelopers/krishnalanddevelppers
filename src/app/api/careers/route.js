// Receives career applications (multipart form with resume) and appends them to the Career
// Google Sheet through its Apps Script web app (google-apps-script/career.gs), which saves the
// resume to Drive.

const FIELD_LIMIT = 2000;
const COVER_LETTER_LIMIT = 5000;
// Kept under the ~4.5MB request body limit of serverless hosts like Vercel
const RESUME_MAX_BYTES = 4 * 1024 * 1024;
const RESUME_TYPES = {
  pdf: "application/pdf",
  doc: "application/msword",
  docx: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
};

const clean = (value, limit = FIELD_LIMIT) => String(value ?? "").trim().slice(0, limit);

export async function POST(request) {
  const url = process.env.GOOGLE_SHEETS_CAREER_URL;
  if (!url) {
    console.error('Google Sheet web app URL for "Career" is not set');
    return Response.json({ ok: false, error: "Application storage is not configured" }, { status: 500 });
  }

  let form;
  try {
    form = await request.formData();
  } catch {
    return Response.json({ ok: false, error: "Invalid request" }, { status: 400 });
  }

  const application = {
    name: clean(form.get("name")),
    email: clean(form.get("email")),
    phone: clean(form.get("phone")),
    position: clean(form.get("position")),
    experience: clean(form.get("experience")),
    coverLetter: clean(form.get("coverLetter"), COVER_LETTER_LIMIT),
  };

  if (!application.name || !application.email || !application.phone || !application.position) {
    return Response.json({ ok: false, error: "Please fill all required fields" }, { status: 400 });
  }

  const resume = form.get("resume");
  if (!resume || typeof resume === "string" || resume.size === 0) {
    return Response.json({ ok: false, error: "Please upload your resume" }, { status: 400 });
  }
  const ext = resume.name.split(".").pop().toLowerCase();
  if (!RESUME_TYPES[ext]) {
    return Response.json({ ok: false, error: "Only PDF or DOC/DOCX files are supported." }, { status: 400 });
  }
  if (resume.size > RESUME_MAX_BYTES) {
    return Response.json({ ok: false, error: "Resume must be 4MB or smaller." }, { status: 400 });
  }

  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify({
        ...application,
        resume: {
          name: clean(resume.name, 200),
          type: RESUME_TYPES[ext],
          data: Buffer.from(await resume.arrayBuffer()).toString("base64"),
        },
        secret: process.env.GOOGLE_SHEETS_CAREER_SECRET ?? "",
      }),
      redirect: "follow",
    });
    const result = await res.json().catch(() => null);
    if (!res.ok || !result?.ok) {
      console.error('Google Sheet "Career" webhook failed', res.status, result);
      return Response.json({ ok: false, error: "Could not submit your application" }, { status: 502 });
    }
  } catch (error) {
    console.error('Google Sheet "Career" webhook error', error);
    return Response.json({ ok: false, error: "Could not submit your application" }, { status: 502 });
  }

  return Response.json({ ok: true });
}
