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



  // Form submission handler
 const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
   e.preventDefault();

   const formData = new FormData(e.currentTarget);
   const data: Record<string, string> = Object.fromEntries(
     Array.from(formData.entries()).map(([key, value]) => [key, String(value)])
   );

   const newErrors: Partial<Record<FieldId, string>> = {};

   // Validation
   if (!validateName(data.FirstName)) {
     newErrors.FirstName = "First name is invalid.";
   }
   if (!validateName(data.LastName)) {
     newErrors.LastName = "Last name is invalid.";
   }
   if (!validatePassword(data.password)) {
     newErrors.password =
       "Password must be 6 characters or more and contain at least one uppercase letter and one special character.";
   }
   if (data.password !== data.confirmPassword) {
     newErrors.confirmPassword = "Passwords do not match.";
   }
   if (!data.title) {
     newErrors.title = "Please select a title.";
   }

   // Early exit if errors
   if (Object.keys(newErrors).length > 0) {
     setErrors(newErrors);

     const firstInvalidKey = Object.keys(newErrors)[0] as FieldId;
     const firstInvalidRef = fieldRefs.current[firstInvalidKey];
     if (firstInvalidRef) {
       firstInvalidRef.focus();
     }
     return;
   }

   // Email normalization
   const normalized = normalizeEmail(data.email);
   if (!normalized) {
     newErrors.email = "Email is invalid.";
     setErrors(newErrors);

     const firstInvalidKey = Object.keys(newErrors)[0] as FieldId;
     const firstInvalidRef = fieldRefs.current[firstInvalidKey];
     if (firstInvalidRef) {
       firstInvalidRef.focus();
     }
     return;
   }

   // Success path
   console.log("Form submission:", data);
   console.log("Normalized email:", normalized);
 };


  const handleFieldChange = (id: FieldId) => {
    if (errors[id]) {
      setErrors((prev) => {
        const updated = { ...prev };
        delete updated[id];
        return updated;
      });
    }
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
