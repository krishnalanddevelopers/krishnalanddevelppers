// Sends a career application (with resume file) to /api/careers, which appends it to the Google Sheet.
export async function submitApplication({ resume, ...fields }) {
  const body = new FormData();
  Object.entries(fields).forEach(([key, value]) => body.append(key, value ?? ""));
  body.append("resume", resume);

  const res = await fetch("/api/careers", { method: "POST", body });
  const result = await res.json().catch(() => null);
  if (!res.ok || !result?.ok) {
    throw new Error(result?.error || "Something went wrong. Please try again.");
  }
}
