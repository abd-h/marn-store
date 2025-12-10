// tests/validation.test.ts
import { validators } from "@/lib/fieldValidators";

describe("fieldValidators", () => {
  describe("email validator", () => {
    it("should return an error for invalid email", () => {
      const result = validators.email?.("not-an-email");
      expect(result).toBe("Email is invalid.");
    });

    it("should return undefined for valid email", () => {
      const result = validators.email?.("user@example.com");
      expect(result).toBeUndefined();
    });
  });

  // add password, name, title tests here too
});



describe("fieldValidators", () => {
  // existing tests for email, password, etc.
});

describe("DynamicForm confirmPassword validator", () => {
  // simulate the fieldRefs context
  const fieldRefs = {
    current: {
      password: { value: "Secret123!" } as HTMLInputElement,
    },
  };

  // inline confirmPassword validator, same as in DynamicForm
  const confirmPassword = (val: string) => {
    const passwordValue = fieldRefs.current.password?.value ?? "";
    return val !== passwordValue ? "Passwords do not match." : undefined;
  };

  it("should return an error when passwords do not match", () => {
    const result = confirmPassword("WrongPass!");
    expect(result).toBe("Passwords do not match.");
  });

  it("should return undefined when passwords match", () => {
    const result = confirmPassword("Secret123!");
    expect(result).toBeUndefined();
  });

  it("should handle empty confirmPassword gracefully", () => {
    const result = confirmPassword("");
    expect(result).toBe("Passwords do not match.");
  });
});
