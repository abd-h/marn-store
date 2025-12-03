"use client";
import React from "react";

export type Field = {
  id: string;
  type: "text" | "email" | "password" | "select";
  placeholder: string;
  required?: boolean;
  options?: string[]; // only used for select fields
};



const signupFields: Field[] = [
  {
    id: "title",
    type: "select",
    options: ["Title", "Mr", "Mrs", "Ms", "Dr", "Revd", "Prof"],
    required: true,
    placeholder: "Title",
  },
  { id: "First name", type: "text", placeholder: "First name", required: true },
  { id: "Last name", type: "text", placeholder: "Last name", required: true },
  { id: "email", type: "email", placeholder: "Email", required: true },
  { id: "password", type: "password", placeholder: "Password", required: true },
  {
    id: "confirmPassword",
    type: "password",
    placeholder: "Confirm Password",
    required: true,
  },
];

type DynamicFormProps = {
  fields: Field[];
  buttonLabel: string;
};

export default function DynamicForm({ fields, buttonLabel }: DynamicFormProps) {
  return (
    <form className="space-y-4">
      {fields.map((field) =>
        field.type === "select" ? (
          <select
            key={field.id}
            id={field.id}
            required={field.required}
            className="mt-1 block w-full border border-black  shadow-sm p-4 focus:ring-black focus:outline-none focus:border-black placeholder:text-sm placeholder:tracking-wide "
          >
            {field.options?.map((option) => (
              <option key={option} value={option === "Title" ? "" : option}>
                {option}{" "}
              </option>
            ))}
          </select>
        ) : (
          <input
            key={field.id}
            id={field.id}
            type={field.type}
            placeholder={field.placeholder}
            required={field.required}
            className="mt-1 block w-full border border-black  shadow-sm p-4 focus:ring-black focus:outline-none focus:border-black placeholder:text-sm placeholder:tracking-wide "
          />
        )
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
