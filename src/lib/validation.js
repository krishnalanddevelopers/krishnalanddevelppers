// Shared field rules for the website forms. Each validator returns an error message, or "" when valid.

const NAME_RE = /^[\p{L}][\p{L} .'-]*$/u;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
// Indian mobile numbers: 10 digits starting with 6-9
const MOBILE_RE = /^[6-9]\d{9}$/;

export const INVALID_FORM_MESSAGE = "Please fix the highlighted fields before submitting.";

export function validateName(value, label = "Full Name") {
  const name = value.trim();
  if (!name) return `${label} is required`;
  if (name.length < 2) return `${label} must be at least 2 characters`;
  if (!NAME_RE.test(name)) return `${label} can only contain letters and spaces`;
  return "";
}

export function validateEmail(value) {
  const email = value.trim();
  if (!email) return "Email is required";
  if (!EMAIL_RE.test(email)) return "Please enter a valid email address";
  return "";
}

export function validateMobile(value) {
  const mobile = value.trim();
  if (!mobile) return "Mobile Number is required";
  if (!MOBILE_RE.test(mobile)) return "Enter a valid 10-digit mobile number";
  return "";
}

// Keeps only digits, max 10, for mobile number inputs
export const toMobileDigits = value => value.replace(/\D/g, "").slice(0, 10);

// Drops empty messages so `Object.keys(errors).length` means "has errors"
export const compactErrors = errors =>
  Object.fromEntries(Object.entries(errors).filter(([, message]) => message));

// Moves focus to the first invalid field (in form order) after a failed submit
export function focusFirstError(form, errors) {
  if (!form) return;
  const field = [...form.elements].find(el => el.name && errors[el.name]);
  field?.focus({ preventScroll: true });
  field?.scrollIntoView({ behavior: "smooth", block: "center" });
}
