"use client";

import {
  Listbox,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
} from "@headlessui/react";
import { CheckIcon, ChevronsUpDownIcon } from "lucide-react";
import { useState } from "react";
import { Field } from "./DynamicForm";

type SelectFieldProps = {
  field: Field;
};

export default function SelectField({ field }: SelectFieldProps) {
  // Default to first option
  const [selected, setSelected] = useState(field.options?.[0] ?? "");

  return (
    <div className="relative w-full">
      <Listbox value={selected} onChange={setSelected}>
        <div className="relative">
          {/* Button */}
          <ListboxButton
            className="w-full border border-black rounded-sm px-3 py-3 text-sm
                       bg-white text-gray-700 text-left
                       focus:outline-none focus:ring-2 focus:ring-black
                       flex justify-between items-center"
          >
            <span>{selected || field.placeholder}</span>
            <ChevronsUpDownIcon className="h-5 w-5 text-gray-500" />
          </ListboxButton>

          {/* Options */}
          <ListboxOptions
            className="absolute mt-1 max-h-60 w-full overflow-auto
                       rounded-sm border border-black bg-white shadow-lg
                       focus:outline-none z-20"
          >
            {field.options?.map((option) => (
              <ListboxOption
                key={option}
                value={option}
                className={({ active }) =>
                  `cursor-pointer select-none px-4 py-2 text-sm ${
                    active ? "bg-black text-white" : "text-gray-700"
                  }`
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
      </Listbox>
    </div>
  );
}

/**  <form className="space-y-4">
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
      {/* Dynamic button*/
//   <button
//     type="submit"
//     className="uppercase w-full bg-black text-white text-sm font-bold tracking-widest p-4 transition-colors"
//   >
//     {buttonLabel}
//   </button>
// </form> */}
