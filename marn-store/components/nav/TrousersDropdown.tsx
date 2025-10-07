"use client";
import { useHover } from "@/context/HoverContext";
import Link from "next/link";

export default function TrousersDropdown() {
  const { setHoveredCategory } = useHover();

  return (
    <li
      onMouseEnter={() => setHoveredCategory("trousers")}
      className="relative group"
    >
      <Link href="/trousers" className="hover:text-red-900 transition">
        Trousers
      </Link>
    </li>
  );
}
