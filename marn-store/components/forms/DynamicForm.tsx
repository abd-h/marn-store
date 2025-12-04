"use client";
import React, { useState} from "react";
import { Listbox } from "@headlessui/react";
import { CheckIcon, ChevronsUpDownIcon } from "lucide-react";

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
  return (
    <form className="space-y-4">
      {fields.map((field) =>
        field.type === "select" ? (
          <div className="relative z-10 overflow-hidden" key={field.id}>
            <select
              id={field.id}
              required={field.required}
              className="mt-1 block w-full border border-black  shadow-sm p-4 focus:ring-black focus:outline-none focus:border-black placeholder:text-sm placeholder:tracking-wide
                      appearance-none
                      bg-white text-gray-700"
            >
              {field.options?.map((option) => (
                <option className="text-xl" key={option} value={option === "Title" ? "" : option}>
                  {option}{" "}
                </option>
              ))}
            </select>
            <span className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
              ▼
            </span>
          </div>
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
