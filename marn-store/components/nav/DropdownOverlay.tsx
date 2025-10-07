"use client";

import { useHover } from "@/context/HoverContext";
import { DropdownBanner } from "../DropdownBanner";

export default function DropdownOverlay() {
  const { hoveredCategory } = useHover();
console.log("Hovered category:", hoveredCategory);

  return (
    <div
      className={`animate-slide-down absolute left-0 top-full w-screen bg-white shadow-lg transition-all duration-300 ease-out ${
        hoveredCategory
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 -translate-y-4 pointer-events-none"
      }`}
    >
      {hoveredCategory && <DropdownBanner category={hoveredCategory} />}
    </div>
  );
}
