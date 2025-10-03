"use client";
import { useEffect, useState } from "react";
import { DropdownSection } from "@/lib/types";

// import { parseDropdownMarkdown } from "@/lib/parseDropdownMarkdown";

export function DropdownBanner({ category }: { category: string }) {
  // const sections = parseDropdownMarkdown(category);
  
  const [sections, setSections] = useState<DropdownSection[]>([]);

  useEffect(() => {
    fetch(`/api/dropdown?category=${category}`)
      .then(res => res.json())
      .then(data => setSections(data));
  }, [category]);

  if (sections.length === 0) {
    return (
      <div className="p-6 text-sm text-neutral-500">
        No dropdown content found.
      </div>
    );
  }

    return (
      <section className="w-screen px-8 py-6 grid grid-cols-4 gap-6 max-w-screen-xl mx-auto">
        {sections.map(({ heading, links }) => (
          <div key={heading}>
            <h3 className="text-sm font-semibold mb-2">{heading}</h3>
            <ul className="space-y-1 text-sm text-gray-700">
              {" "}
              {links.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="hover:underline hover:text-black transition"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>
    );
}