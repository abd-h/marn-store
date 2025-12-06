import { validateEmail, validateName, validatePassword } from "../validation"


describe("validateName with international support", () => {
  it("accepts accented characters", () => {
    expect(validateName("Äbdalla")).toBe(true);
    expect(validateName("Élodie")).toBe(true);
    expect(validateName("Çinar")).toBe(true);
  });

  it("rejects names shorter than 3 letters", () => {
    expect(validateName("Éa")).toBe(false);
  });

  it("rejects names with numbers or special characters", () => {
    expect(validateName("Ab1")).toBe(false);
    expect(validateName("Ab@")).toBe(false);
  });
});


describe("validatePassword with Unicode support", () => {
  it("accepts strong ASCII passwords", () => {
    expect(validatePassword("Secret1!")).toBe(true);
    expect(validatePassword("Pass@2025")).toBe(true);
  });

  it("rejects passwords shorter than 6 characters", () => {
    expect(validatePassword("Ab1!")).toBe(false);
  });

  it("rejects passwords with no uppercase", () => {
    expect(validatePassword("secret1!")).toBe(false);
  });

  it("rejects passwords with no special character", () => {
    expect(validatePassword("Secret1")).toBe(false);
  });

  it("rejects passwords that are all numbers", () => {
    expect(validatePassword("123456")).toBe(false);
  });

  // ✅ New edge cases with accented characters
  it("accepts passwords with accented characters", () => {
    expect(validatePassword("Pássword!")).toBe(true); // accented 'á'
    expect(validatePassword("Ñandú1@")).toBe(true); // accented 'ú' + uppercase Ñ
    expect(validatePassword("ÜberStrong#1")).toBe(true); // accented 'Ü'
  });

  it("rejects accented passwords missing uppercase", () => {
    expect(validatePassword("pássword!")).toBe(false); // lowercase only
  });
});


describe("validateEmail with Unicode edge cases", () => {
  it("rejects invalid email formats", () => {
    expect(validateEmail("test@domain")).toBe(false);
    expect(validateEmail("@domain.com")).toBe(false);
    expect(validateEmail("userdomain.com")).toBe(false);
  });

  it("accepts valid email formats", () => {
    expect(validateEmail("test@example.com")).toBe(true);
    expect(validateEmail("user.name@domain.co.uk")).toBe(true);
  });

  it("accepts emails with uppercase letters", () => {
    expect(validateEmail("User@Domain.COM")).toBe(true);
  });

  // ✅ New edge cases with accented characters
  it("accepts emails with accented characters in local part", () => {
    expect(validateEmail("josé@example.com")).toBe(true);
    expect(validateEmail("élodie@domain.fr")).toBe(true);
  });

  it("accepts emails with accented characters in domain", () => {
    expect(validateEmail("user@mañana.com")).toBe(true);
  });

  it("rejects emails with spaces", () => {
    expect(validateEmail("user name@example.com")).toBe(false);
  });
    
    // Additional test to verify domain normalization
    it("accepts Unicode domain and normalises to ASCII", () => {
      expect(validateEmail("user@mañana.com")).toBe(true);
      expect(validateEmail("info@bücher.de")).toBe(true);
    });

});
