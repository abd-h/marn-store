"use client";
import { useHover } from "@/context/HoverContext";
import { NavItemClass } from "@/lib/styles";
import Link from "next/link";

export default function ShirtsDropdown() {
  const { setHoveredCategory } = useHover();

  return (
    <li
      onMouseEnter={() => setHoveredCategory("shirts")}
      className="relative group"
    >
      <Link href="/shirts" className={NavItemClass}>
        Shirts
      </Link>
    </li>
  );
}
