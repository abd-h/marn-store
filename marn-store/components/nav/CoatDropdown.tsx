"use client";
import { useHover } from "@/context/HoverContext";
import Link from "next/link";

export default function CoatDropdown() {
  const { setHoveredCategory } = useHover();

  return (
    <li
      onMouseEnter={() => setHoveredCategory("coats")}
      className="relative group"
    >
      <Link href="/coats" className="hover:text-red-900 transition font-bold tracking-wide">
        Coats
      </Link>
    </li>
  );
}
