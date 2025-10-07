"use client";

import { useEffect, useState } from "react";

type DropdownSection = {
  heading: string;
  links: { label: string; href: string }[];
};

export default function DropdownNav({ category }: { category: string }) {
  const [sections, setSections] = useState<DropdownSection[]>([]);

  useEffect(() => {
    fetch(`/api/dropdown?category=${category}`)
      .then((res) => res.json())
      .then(setSections)
      .catch((err) => console.error("Dropdown fetch error:", err));
  }, [category]);

  return (
    <nav className="space-y-4">
      {sections.map((section) => (
        <div key={section.heading}>
          <h3 className="font-semibold text-sm text-gray-700">
            {section.heading}
          </h3>
          <ul className="mt-2 space-y-1">
            {section.links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-gray-500 hover:text-black"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </nav>
  );
}
