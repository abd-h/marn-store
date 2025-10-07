"use client";
import { useHover } from "@/context/HoverContext";
import Link from "next/link";

export default function CasualsDropdown() {
  const { setHoveredCategory } = useHover();

  return (
    <li
      onMouseEnter={() => setHoveredCategory("casuals")}
      className="relative group"
    >
      <Link href="/casuals" className="hover:text-red-900 transition">
        Casuals
      </Link>
    </li>
  );
}
