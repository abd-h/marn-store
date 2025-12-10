"use client";

import React from "react";
import { Field } from "./DynamicForm";
import { FieldId } from "./DynamicForm"; // import your FieldId type

type InputFieldProps = {
  field: Field;
  error?: string;
  inputRef?: (el: HTMLInputElement | null) => void;
    onChange?: (id: FieldId) => void;
    onBlur?: (id: FieldId, value: string) => void;
};

export default function InputField({
  field,
  error,
  inputRef,
    onChange,
  onBlur,
}: InputFieldProps) {
  return (
    <div className="w-full">
      <input
        ref={inputRef}
        id={field.id}
        type={field.type}
        name={field.id}
        placeholder={field.placeholder}
        required={field.required}
              onChange={() => onChange?.(field.id as FieldId)}
              onBlur={(e) => onBlur?.(field.id as FieldId, e.target.value)}
        aria-invalid={!!error}
        aria-describedby={error ? `${field.id}-error` : undefined}
        className="w-full border border-black p-4 text-sm rounded-sm"
      />
      {error && (
        <p id={`${field.id}-error`} className="text-red-600 text-sm mt-1">
          {error}
        </p>
      )}
    </div>
  );
}
