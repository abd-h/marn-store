"use client";

import {
  Listbox,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
} from "@headlessui/react";
import { CheckIcon, ChevronDownIcon } from "lucide-react";
import { useState } from "react";
import { Field, FieldId } from "./DynamicForm";

type SelectFieldProps = {
  field: Field;
  error?: string;
  inputRef?: (el: HTMLInputElement | null) => void;
  onChange?: (id: FieldId) => void;
};

export default function SelectField({
  field,
  error,
  inputRef,
  onChange,
}: SelectFieldProps) {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <div className="relative w-full">
      <Listbox
        value={selected}
        onChange={(value) => {
          setSelected(value);
          onChange?.(field.id as FieldId);
        }}
      >
        <div className="relative">
          <ListboxButton
            aria-invalid={!!error}
            aria-describedby={error ? `${field.id}-error` : undefined}
            className="w-full border border-black p-4 text-sm bg-white text-gray-700 text-left flex justify-between items-center"
          >
            <span
              className={!selected ? "text-black text-sm tracking-widest" : ""}
            >
              {selected || field.placeholder}
            </span>
            <ChevronDownIcon className="h-5 w-5 text-gray-500" />
          </ListboxButton>

          <ListboxOptions className="absolute max-h-60 w-full border border-black bg-white shadow-lg overflow-auto rounded-sm z-20">
            {field.options?.map((option) => (
              <ListboxOption
                key={option}
                value={option}
                className={({ focus, selected }) =>
                  `cursor-pointer select-none px-4 py-2 text-sm ${
                    focus ? "bg-[#f1f1f1]" : "text-black"
                  } ${selected ? "font-semibold" : "font-normal"}`
                }
              >
                {({ selected }) => (
                  <span className="flex justify-between items-center">
                    {option}
                    {selected && <CheckIcon className="h-4 w-4 text-black" />}
                  </span>
                )}
              </ListboxOption>
            ))}
          </ListboxOptions>
        </div>
        <input
          name={field.id}
          ref={inputRef}
          type="hidden"
          value={selected ?? ""}
        />
      </Listbox>
      {error && (
        <p id={`${field.id}-error`} className="text-red-500 text-sm mt-1">
          {error}
        </p>
      )}
    </div>
  );
}
