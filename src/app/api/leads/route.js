// Receives website form submissions and appends them to the matching Google Sheet through
// its Apps Script web app (google-apps-script/book-site-visit.gs and contact-us.gs).

const FIELD_LIMIT = 2000;

// Only the /contact page form goes to the Contact Us sheet; every other enquiry
// (Book Site Visit button, enquiry popups) goes to the Book Site Visit sheet.
const SHEETS = {
  bookVisit: {
    url: process.env.GOOGLE_SHEETS_BOOK_VISIT_URL,
    secret: process.env.GOOGLE_SHEETS_BOOK_VISIT_SECRET,
  },
  contact: {
    url: process.env.GOOGLE_SHEETS_CONTACT_URL,
    secret: process.env.GOOGLE_SHEETS_CONTACT_SECRET,
  },
};

const clean = value => String(value ?? "").trim().slice(0, FIELD_LIMIT);

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return Response.json({ ok: false, error: "Invalid request" }, { status: 400 });
  }

  const formType = ["Contact Us", "Book Site Visit"].includes(body.formType) ? body.formType : "Enquiry";
  const sheet = formType === "Contact Us" ? SHEETS.contact : SHEETS.bookVisit;
  if (!sheet.url) {
    console.error(`Google Sheet web app URL for "${formType}" is not set`);
    return Response.json({ ok: false, error: "Lead storage is not configured" }, { status: 500 });
  }

  const lead = {
    name: clean(body.name),
    email: clean(body.email),
    phone: clean(body.phone),
    project: clean(body.project),
    message: clean(body.message),
  };

  if (!lead.name || (!lead.email && !lead.phone)) {
    return Response.json({ ok: false, error: "Name and contact details are required" }, { status: 400 });
  }

  try {
    const res = await fetch(sheet.url, {
      method: "POST",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify({ ...lead, formType, secret: sheet.secret ?? "" }),
      redirect: "follow",
    });
    const result = await res.json().catch(() => null);
    if (!res.ok || !result?.ok) {
      console.error(`Google Sheet "${formType}" webhook failed`, res.status, result);
      return Response.json({ ok: false, error: "Could not save your request" }, { status: 502 });
    }
  } catch (error) {
    console.error(`Google Sheet "${formType}" webhook error`, error);
    return Response.json({ ok: false, error: "Could not save your request" }, { status: 502 });
  }

  return Response.json({ ok: true });
}
