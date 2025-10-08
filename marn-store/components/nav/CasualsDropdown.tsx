"use client";
import { useHover } from "@/context/HoverContext";
import { NavItemClass } from "@/lib/styles";
import Link from "next/link";

export default function CasualsDropdown() {
  const { setHoveredCategory } = useHover();

  return (
    <li
      onMouseEnter={() => setHoveredCategory("casuals")}
      className="relative group"
    >
      <Link href="/casuals" className={NavItemClass}>
        Casuals
      </Link>
    </li>
  );
}
