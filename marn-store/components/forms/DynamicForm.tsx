"use client";
import React, { useState} from "react";

import SelectField from "./TitleSelect";
import InputField from "./InputField";
import { validateEmail, validateName, validatePassword } from "@/lib/validation";

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
    
    // Handle form submission logic here
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    const newErrors: Record<string, string> = {};
    // Simple validation
    if (!validateName(data.FirstName as string)) {
      newErrors.FirstName = "First name is invalid.";
    }

    if (!validateName(data.lastName as string)) {
      newErrors.lastName = "Last name is invalid";
    }

    if (!validatePassword(data.password as string)) {
      newErrors.password = "Password must be 6 characters or more and contian at least one uppercase letter and one special character.";
    }

    if (data.password !== data.confirmPassword) {
      newErrors.confirmPassword = "Passwords match.";
    }

    if (!data.title) {
      newErrors.title = "Please select a title.";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    console.log("Form submission:", data);
    console.log("Form error message:", newErrors);

    console.log("Name valid?", validateName(data.FirstName as string));
    console.log("Password valid?", validatePassword(data.password as string));
    console.log("Email valid?", validateEmail(data.email as string));

  }
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

