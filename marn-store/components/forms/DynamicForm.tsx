"use client";
import React, { useState} from "react";

import SelectField from "./TitleSelect";
import InputField from "./InputField";

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
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Handle form submission logic here
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    console.log("Form submission:", data);
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
