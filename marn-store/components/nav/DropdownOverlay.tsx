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
  const [lastContent, setLastContent] = useState<"search" | "dropdown" | null>(null);

  const shouldShowOverlay = hoveredCategory || searchWasManuallyActivated;

 

useEffect(() => {
  if (shouldShowOverlay) {
    setIsVisible(true);

    if (hoveredCategory) {
      setLastContent("dropdown");
    } else if (searchWasManuallyActivated) {
      setLastContent("search");
    }
  } else {
    const timer = setTimeout(() => setIsVisible(false), 300);
    return () => clearTimeout(timer);
  }
}, [shouldShowOverlay]);

  useEffect(() => {
    if (searchWasManuallyActivated) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [searchWasManuallyActivated]);

  
  return (
    <>
      {searchWasManuallyActivated && (
        <div className="fixed inset-0 bg-black bg-opacity-40 z-30 transition-opacity duration-500 ease-in-out" />
      )}

      <div
        className={`absolute top-[90px] left-0 w-full z-40 bg-white dark:bg-black shadow-lg origin-top overflow-hidden transition-all duration-500 ease-in-out ${
          isVisible
            ? "max-h-[600px] opacity-100 pointer-events-auto"
            : "max-h-0 opacity-0 pointer-events-none"
        }`}
        aria-hidden={!isVisible}
      >
        <div
          className={` mb-12 w-2/4 mx-auto px-4 py-6 transition-all duration-500 ease-in-out`}
        >
          {lastContent === "dropdown" && (
            <div className={`${isVisible ? "block" : "hidden"}`}>
              <DropdownBanner category={hoveredCategory ?? ""} />
            </div>
          )}

          {lastContent === "search" && (
            <div className={` ${isVisible ? "block" : "hidden"}`}>
              <SearchBanner />
            </div>
          )}
        </div>
      </div>
    </>
  );
}
