"use client";

import { useHover } from "@/context/HoverContext";
import { DropdownBanner } from "../DropdownBanner";
import SearchBanner from "../icons/nav/search/SearchBanner";

export default function DropdownOverlay() {
  const { hoveredCategory, searchActive } = useHover();
console.log("Hovered category:", hoveredCategory);
console.log("SEARCH ACTIVE:", searchActive);

  const shouldShowOverlay = hoveredCategory || searchActive;
  return (
    <div
      className={`animate-slide-down absolute left-0 top-full w-screen bg-white shadow-lg transition-all duration-300 ease-out ${
        shouldShowOverlay
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 -translate-y-4 pointer-events-none"
      }`}
    >
      {hoveredCategory && (
        <div>
          <DropdownBanner category={hoveredCategory} />
        </div>
      )}
      {searchActive && <SearchBanner />}
    </div>
  );
}
