"use client";

import {
  Listbox,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
} from "@headlessui/react";
import { CheckIcon, ChevronDownIcon } from "lucide-react";
import { useState } from "react";
import { Field } from "./DynamicForm";

type SelectFieldProps = {
  field: Field;
  error?: string; // although error is not used in this component, it's kept for consistency
};

export default function SelectField({ field, error }: SelectFieldProps) {
  // Default to first option
  const [selected, setSelected] = useState<string | null>(null);
  

  return (
    <div className="relative w-full">
      <Listbox value={selected} onChange={setSelected}>
        <div className="relative">
          {/* Button */}
          <ListboxButton
            className={`w-full border border-black p-4 text-sm
                       bg-white text-gray-700 text-left
                       focus:outline-none focus:ring-none 
                       focus:ring-black
                       aria-expanded:border-b-0
                       focus:border-black
                       flex justify-between items-center
                        `}
          >
            <span
              className={!selected ? "text-black text-sm tracking-widest" : ""}
            >
              {selected || field.placeholder}
            </span>
            <ChevronDownIcon className="h-5 w-5 text-gray-500" />
          </ListboxButton>

          {/* Options */}
          <ListboxOptions
            className="absolute max-h-60 w-full border-r-[1px] border-l-[1px] border-b-[2px] mb-2 py-4 overflow-auto
                       rounded-sm  border-black bg-white shadow-lg
                       focus:outline-none z-20"
          >
            {field.options?.map((option) => (
              <ListboxOption
                key={option}
                value={option}
                className={({ focus, selected }) =>
                  `cursor-pointer select-none px-4 py-4 text-sm ${
                    focus ? "bg-[#f1f1f1] py-2 border-t-0" : "text-black"
                  }
                  ${selected ? "font-semibold" : "font-normal"}`
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
        <input type="hidden" name={field.id} value={selected ?? ""} />
      </Listbox>
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
}

