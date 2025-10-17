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
      className={` absolute left-0 top-full w-full z-40 bg-white dark:bg-black shadow-lg overflow-hidden transition-all duration-300 ease-in-out rounded-b ${
        shouldShowOverlay
          ? " opacity-100 ranslate-y-px  pointer-events-auto"
          : "max-h-0 opacity-0 -translate-y-4 pointer-events-none"
      }`}
      aria-hidden={!(hoveredCategory || searchActive)}
    >
      <div
        className={`w-2/4 mx-auto ${
          !shouldShowOverlay ? "p-0 m-0" : "px-4 py-6"
        }`}
      >
        {searchActive ? (
          <SearchBanner />
        ) : hoveredCategory ? (
          <DropdownBanner category={hoveredCategory} />
        ) : null}
      </div>
    </div>
  );
}
