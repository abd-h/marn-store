"use client";
import { useHover } from "@/context/HoverContext";
import { NavItemClass } from "@/lib/styles";
import Link from "next/link";

export default function TrousersDropdown() {
  const { setHoveredCategory } = useHover();

  return (
    <li
      onMouseEnter={() => setHoveredCategory("trousers")}
      className="relative group"
    >
      <Link href="/trousers" className={NavItemClass}>
        Trousers
      </Link>
    </li>
  );
}
