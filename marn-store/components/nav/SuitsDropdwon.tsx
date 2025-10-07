"use client";
import { useHover } from "@/context/HoverContext";
import Link from "next/link";

export default function SuitsDropdown() {
  const { setHoveredCategory } = useHover();

  return (
    <li
      onMouseEnter={() => setHoveredCategory("suits")}
      className="relative group"
    >
      <Link href="/suits" className="hover:text-red-900 transition">
        Suits
      </Link>
    </li>
  );
}
