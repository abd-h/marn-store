"use client";

import React from "react";
import { Field } from "./DynamicForm";

type InputFieldProps = {
    field: Field;
    error?: string;
};

export default function InputField({ field, error }: InputFieldProps) {
  return (
    <div className="w-full">
      <input
        type={field.type}
        name={field.id}
        placeholder={field.placeholder}
        required={field.required}
        className="w-full border border-black p-4 text-sm rounded-sm"
      />
      {error && <p className="text-red-600 text-sm mt-1">{error}</p>}
    </div>
  );
}