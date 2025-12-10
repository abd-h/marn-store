import {
  normalizeEmail,
  validateEmail,
  validateName,
  validatePassword,
} from "@/lib/validation";
import { FieldId } from "@/components/forms/DynamicForm";

export const validators: Partial<
  Record<FieldId, (val: string) => string | undefined>
> = {
  FirstName: (val) =>
    !validateName(val) ? "First name is invalid." : undefined,

  LastName: (val) => (!validateName(val) ? "Last name is invalid." : undefined),

  email: (val) => {
    const normalized = normalizeEmail(val) ?? "";
    return !validateEmail(normalized) ? "Email is invalid." : undefined;
  },

  password: (val) =>
    !validatePassword(val)
      ? "Password must be 6+ chars, include uppercase and special character."
      : undefined,

  title: (val) => (!val ? "Please select a title." : undefined),
};
