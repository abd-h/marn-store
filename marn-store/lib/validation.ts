import { domainToASCII } from "url";

export function validateName(name: string): boolean {
  // Allow any Unicode letter (including accented), at least 3 characters
  const regex = /^[\p{L}]{3,}$/u;
  return regex.test(name);
}

export function validatePassword(password: string): boolean {
  const lengthOK = password.length >= 6;

  // Unicode uppercase letters (covers A–Z and accented uppercase like Á, Ç, Ü)
  const hasUpper = /\p{Lu}/u.test(password);

  // Special characters (anything not a letter or digit)
  const hasSpecial = /[^\p{L}\p{N}]/u.test(password);

  // Must not be all numbers
  const notAllNumbers = !/^\d+$/u.test(password);

  return lengthOK && hasUpper && hasSpecial && notAllNumbers;
}

export function validateEmail(email: string): boolean {
  // Basic Unicode-aware regex for format
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/u;
  if (!regex.test(email)) return false;

  try {
    const [localPart, domain] = email.split("@");

    // Convert domain to ASCII (handles ñ, ü, etc.)
    const asciiDomain = domainToASCII(domain);

    // If conversion fails, domainToASCII returns an empty string
    if (!asciiDomain) return false;

    // Normalised email (safe to store in DB)
    const normalizedEmail = `${localPart}@${asciiDomain}`;

    // Optional: you can return normalizedEmail instead of true if you want to store it
    return true;
  } catch {
    return false;
  }
}

// Normalizes email by converting domain to ASCII; returns null if invalid
export function normalizeEmail(email: string): string | null {
  // Basic Unicode-aware regex for format
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/u;
  if (!regex.test(email)) return null;

  try {
    const [localPart, domain] = email.split("@");

    // Convert domain to ASCII (handles ñ, ü, etc.)
    const asciiDomain = domainToASCII(domain);

    // If conversion fails, domainToASCII returns an empty string
    if (!asciiDomain) return null;

    // Return the normalized email string
    return `${localPart}@${asciiDomain}`;
  } catch {
    return null;
  }
}
