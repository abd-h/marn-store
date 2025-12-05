"use client";
import React, { useState} from "react";
import { Listbox } from "@headlessui/react";
import { CheckIcon, ChevronsUpDownIcon } from "lucide-react";
import SelectField from "./TitleSelect";

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
          <SelectField key={field.id} field={field} />
        ) : (
          <input
            key={field.id}
            id={field.id}
            type={field.type}
            placeholder={field.placeholder}
            required={field.required}
            className="mt-1 block w-full border border-black shadow-sm p-4
               focus:ring-black focus:outline-none focus:border-black
               placeholder:text-sm placeholder:tracking-wide"
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
