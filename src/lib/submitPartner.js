// Experience choices on the channel partner form; /api/partners only accepts these values.
export const PARTNER_EXPERIENCE_OPTIONS = [
  "Under 2 Years",
  "2 to 5 Years",
  "5 to 10 Years",
  "10+ Years",
];

// Sends a channel partner registration to /api/partners, which appends it to the Google Sheet.
export async function submitPartner(partner) {
  const res = await fetch("/api/partners", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(partner),
  });
  const result = await res.json().catch(() => null);
  if (!res.ok || !result?.ok) {
    throw new Error(result?.error || "Something went wrong. Please try again.");
  }
}
