"use client";
import { useHover } from "@/context/HoverContext";
import { NavItemClass } from "@/lib/styles";
import Link from "next/link";

export default function AccessoriesDropdown() {
  const { setHoveredCategory } = useHover();

  return (
    <li
      onMouseEnter={() => setHoveredCategory("accessories")}
      className="relative group"
    >
      <Link
        href="/accessories"
        className={NavItemClass}
      >
        Accessories
      </Link>
    </li>
  );
}
