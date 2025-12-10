"use client";
import React, { useRef, useState } from "react";

import SelectField from "./TitleSelect";
import InputField from "./InputField";
import {
  normalizeEmail,
  validateEmail,
  validateName,
  validatePassword,
} from "@/lib/validation";

export type Field = {
  id: string;
  type: "text" | "email" | "password" | "select";
  placeholder: string;
  required?: boolean;
  options?: string[]; // only used for select fields
};

export type FieldId =
  | "FirstName"
  | "LastName"
  | "email"
  | "password"
  | "confirmPassword"
  | "title";

type DynamicFormProps = {
  fields: Field[];
  buttonLabel: string;
};

export default function DynamicForm({ fields, buttonLabel }: DynamicFormProps) {
  // State to hold form errors
  const [errors, setErrors] = useState<Partial<Record<FieldId, string>>>({});

  const fieldRefs = useRef<
    Record<FieldId, HTMLInputElement | HTMLSelectElement | null>
  >({
    FirstName: null,
    LastName: null,
    email: null,
    password: null,
    confirmPassword: null,
    title: null,
  });

const validators: Record<FieldId, (val: string) => string | undefined> = {
  FirstName: (val) =>
    !validateName(val) ? "First name is invalid." : undefined,

  LastName: (val) => (!validateName(val) ? "Last name is invalid." : undefined),

  email: (val) => {
    const normalized = normalizeEmail(val);
    return !normalized ? "Email is invalid." : undefined;
  },

  password: (val) =>
    !validatePassword(val)
      ? "Password must be 6+ chars, include uppercase and special character."
      : undefined,

  confirmPassword: (val) => {
    const passwordValue = fieldRefs.current.password?.value ?? "";
    return val !== passwordValue ? "Passwords do not match." : undefined;
  },

  title: (val) => (!val ? "Please select a title." : undefined),
};



  // Form submission handler
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const data: Record<string, string> = Object.fromEntries(
      Array.from(formData.entries()).map(([key, value]) => [key, String(value)])
    );

    const newErrors: Partial<Record<FieldId, string>> = {};

    // Run validators for each field
    (Object.keys(validators) as FieldId[]).forEach((id) => {
      const value = data[id] ?? "";
      const error = validators[id](value);
      if (error) newErrors[id] = error;
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);

      const firstInvalidKey = Object.keys(newErrors)[0] as FieldId;
      const firstInvalidRef = fieldRefs.current[firstInvalidKey];
      if (firstInvalidRef) firstInvalidRef.focus();
      return;
    }

    // Success path
    const normalized = normalizeEmail(data.email);
    console.log("Form submission:", data);
    console.log("Normalized email:", normalized);
  };


  // Handle field change to clear errors
  const handleFieldChange = (id: FieldId) => {
    if (errors[id]) {
      setErrors((prev) => {
        const updated = { ...prev };
        delete updated[id];
        return updated;
      });
    }
  };

  // Handle blur event to validate email field
 const handleFieldBlur = (id: FieldId, value: string) => {
   const error = validators[id](value);
   setErrors((prev) => ({ ...prev, [id]: error }));
 };



  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      {/* {fields.map((field) => {
        if (field.type === "select") {
          return <SelectField key={field.id} field={field} />
        }
        return <InputField key={field.id} field={field} />
      }
       
      )} */}
      {fields.map((field) => {
        const refCallback = (
          el: HTMLInputElement | HTMLSelectElement | null
        ) => {
          fieldRefs.current[field.id as FieldId] = el;
        };
        if (field.type === "select") {
          return (
            <SelectField
              key={field.id}
              field={field}
              error={errors[field.id as FieldId]}
              inputRef={refCallback}
              onChange={() => handleFieldChange(field.id as FieldId)}
              onBlur={handleFieldBlur}
            />
          );
        }
        return (
          <InputField
            key={field.id}
            field={field}
            error={errors[field.id as FieldId]}
            inputRef={refCallback}
            onChange={() => handleFieldChange(field.id as FieldId)}
            onBlur={handleFieldBlur}
          />
        );
      })}

      {/* Dynamic button*/}
      <button
        type="submit"
        className="uppercase w-full bg-black text-white text-sm font-bold tracking-widest p-4 transition-colors"
      >
        {buttonLabel}
      </button>
    </form>
  );
}
// function validateEmail(arg0: string): any {
//   throw new Error("Function not implemented.");
// }
