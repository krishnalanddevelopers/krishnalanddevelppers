// Sends a form submission to /api/leads, which appends it to the Google Sheet.
export async function submitLead(lead) {
  const res = await fetch("/api/leads", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(lead),
  });
  const result = await res.json().catch(() => null);
  if (!res.ok || !result?.ok) {
    throw new Error(result?.error || "Something went wrong. Please try again.");
  }
}
