"use client";
import React, { useState} from "react";

import SelectField from "./TitleSelect";
import InputField from "./InputField";
import { normalizeEmail, validateEmail, validateName, validatePassword } from "@/lib/validation";

export type Field = {
  id: string;
  type: "text" | "email" | "password" | "select";
  placeholder: string;
  required?: boolean;
  options?: string[]; // only used for select fields
};

type DynamicFormProps = {
  fields: Field[];
  buttonLabel: string;
};

export default function DynamicForm({ fields, buttonLabel }: DynamicFormProps) {

  // State to hold form errors
  const [errors, setErrors] = useState<Record<string, string>>({});

   // Form submission handler
 const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
   e.preventDefault();

   const formData = new FormData(e.currentTarget);

   // Convert all entries to strings so validators accept them
   const data: Record<string, string> = Object.fromEntries(
     Array.from(formData.entries()).map(([key, value]) => [key, String(value)])
   );

   const newErrors: Record<string, string> = {};

   // Simple validation
   if (!validateName(data.FirstName)) {
     newErrors.FirstName = "First name is invalid.";
   }

   if (!validateName(data.lastName)) {
     newErrors.lastName = "Last name is invalid.";
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

   if (Object.keys(newErrors).length > 0) {
     setErrors(newErrors);
     return;
   }

   // Normalize email before saving
   const normalized = normalizeEmail(data.email);
   if (!normalized) {
     throw new Error("Invalid email format");
   }

   // Save `normalized` to DB or continue submission
   console.log("Form submission:", data);
   console.log("Normalized email:", normalized);
   console.log("Form error message:", newErrors);

   console.log("Name valid?", validateName(data.FirstName));
   console.log("Password valid?", validatePassword(data.password));
   console.log("Email valid?", validateEmail(data.email));
 };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      {fields.map((field) => {
        if (field.type === "select") {
          return <SelectField key={field.id} field={field} />
        }
        return <InputField key={field.id} field={field} />
      }
       
      )}
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

