"use client";
import { useHover } from "@/context/HoverContext";
import Link from "next/link";

export default function ShirtsDropdown() {
  const { setHoveredCategory } = useHover();

  return (
    <li
      onMouseEnter={() => setHoveredCategory("shirts")}
      className="relative group"
    >
      <Link href="/shirts" className="hover:text-red-900 transition">
        Shirts
      </Link>
    </li>
  );
}
