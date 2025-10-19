"use client";

import { useHover } from "@/context/HoverContext";
import { useState, useEffect } from "react";
import { DropdownBanner } from "../DropdownBanner";
import SearchBanner from "../icons/nav/search/SearchBanner";

export default function DropdownOverlay() {
  const { hoveredCategory, searchWasManuallyActivated, searchActive } =
    useHover();
  console.log("Hovered category:", hoveredCategory);

  const [isVisible, setIsVisible] = useState(false);

  const shouldShowOverlay = hoveredCategory || searchWasManuallyActivated;

  useEffect(() => {
    if (shouldShowOverlay) {
      setIsVisible(true);
    } else {
      const timer = setTimeout(() => setIsVisible(false), 300);
      return () => clearTimeout(timer);
    }
  }, [shouldShowOverlay]);

  return (
    <div
      className={`absolute top-[90px] left-0 w-full z-40 bg-white dark:bg-black shadow-lg origin-top transition-transform duration-300 ease-in-out will-change-transform ${
        shouldShowOverlay
          ? "opacity-100 scale-y-100 pointer-events-auto"
          : "opacity-0 scale-y-0 pointer-events-none"
      }`}
      aria-hidden={!shouldShowOverlay}
    >
      <div
        className={`w-2/4 mx-auto ${
          !shouldShowOverlay ? "p-0 m-0" : "px-4 py-6"
        }`}
      >
        {isVisible && hoveredCategory ? (
          <DropdownBanner category={hoveredCategory} />
        ) : (
          <SearchBanner />
        )}
      </div>
    </div>
  );
}
