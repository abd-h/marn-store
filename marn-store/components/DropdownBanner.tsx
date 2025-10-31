"use client";
import { useEffect, useState } from "react";
import { DropdownSection } from "@/lib/types";
import Link from "next/link";

// import { parseDropdownMarkdown } from "@/lib/parseDropdownMarkdown";

export function DropdownBanner({ category }: { category: string }) {
  // const sections = parseDropdownMarkdown(category);

  const [sections, setSections] = useState<DropdownSection[]>([]);

  useEffect(() => {
    fetch(`/api/dropdown?category=${category}`)
      .then((res) => res.json())
      .then((data) => {
        console.log("📄 Parsed sections:", data);
        setSections(data);
      });
  }, [category]);

  if (sections.length === 0) {
    return (
      <div className="p-6 text-sm text-neutral-500">
        No dropdown content found.
      </div>
    );
  }

  return (
    <section className="w-screen px-8 pt-0 pb-6 grid grid-cols-4 gap-6 max-w-screen-lg mx-auto mb-2">
      {sections.map(({ heading, links }) => (
        <div className=" outline px-2" key={heading}>
          <h3 className=" p-2 text-sm font-bold mb-2">{heading}</h3>
          <ul className=" text-sm text-black tracking-wide">
            {" "}
            {links.map(({ label, href }) => (
              <li className=" p-2" key={label}>
                <Link
                  href={href}
                  className="group relative inline-block text-sm text-gray-700 transition-colors duration-300 hover:text-black"
                >
                  {label}
                  <span className="absolute left-0 bottom-0 h-[1px] w-full bg-neutral-800 scale-x-0 origin-center transition-transform duration-500 ease-out group-hover:scale-x-100"></span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}
