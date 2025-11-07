"use client";
import { useEffect, useState } from "react";
import { DropdownSection } from "@/lib/types";
import Link from "next/link";

// import { parseDropdownMarkdown } from "@/lib/parseDropdownMarkdown";

export default function MobileDropdownBanner({ category }: { category: string }) {
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
    <section className=" px-4 py-6 space-y-6">
     
      {sections.map(({ heading, links }) => (
        <div className="w-full" key={heading}>
          <h3 className=" p-2 text-sm font-bold mb-2">{heading}</h3>
          <ul className="border-b-[1px] border-gray-300 w-full text-sm text-black tracking-wide pb-4">
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
