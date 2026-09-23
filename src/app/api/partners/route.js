// Receives channel partner registrations and appends them to the Channel Partner Google Sheet
// through its Apps Script web app (google-apps-script/channel-partner.gs).

import { PARTNER_EXPERIENCE_OPTIONS } from "@/lib/submitPartner";
import { validateEmail, validateMobile, validateName } from "@/lib/validation";

const FIELD_LIMIT = 200;
const MESSAGE_LIMIT = 2000;

const clean = (value, limit = FIELD_LIMIT) => String(value ?? "").trim().slice(0, limit);

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return Response.json({ ok: false, error: "Invalid request" }, { status: 400 });
  }

  const partner = {
    name: clean(body.name),
    email: clean(body.email),
    phone: clean(body.phone),
    city: clean(body.city),
    experience: clean(body.experience),
    preferredLocation: clean(body.preferredLocation),
    companyName: clean(body.companyName),
    clientsCount: clean(body.clientsCount),
    message: clean(body.message, MESSAGE_LIMIT),
  };

  const error =
    validateName(partner.name) ||
    validateEmail(partner.email) ||
    validateMobile(partner.phone) ||
    validateName(partner.city, "City") ||
    (partner.experience && !PARTNER_EXPERIENCE_OPTIONS.includes(partner.experience)
      ? "Please select a valid experience option"
      : "");
  if (error) {
    return Response.json({ ok: false, error }, { status: 400 });
  }
  if (body.consent !== true) {
    return Response.json({ ok: false, error: "Please accept the terms to continue" }, { status: 400 });
  }

  const url = process.env.GOOGLE_SHEETS_PARTNER_URL;
  if (!url) {
    console.error('Google Sheet web app URL for "Channel Partner" is not set');
    return Response.json({ ok: false, error: "Registration storage is not configured" }, { status: 500 });
  }

  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify({ ...partner, secret: process.env.GOOGLE_SHEETS_PARTNER_SECRET ?? "" }),
      redirect: "follow",
    });
    const result = await res.json().catch(() => null);
    if (!res.ok || !result?.ok) {
      console.error('Google Sheet "Channel Partner" webhook failed', res.status, result);
      return Response.json({ ok: false, error: "Could not submit your registration" }, { status: 502 });
    }
  } catch (error) {
    console.error('Google Sheet "Channel Partner" webhook error', error);
    return Response.json({ ok: false, error: "Could not submit your registration" }, { status: 502 });
  }

  return Response.json({ ok: true });
}
