"use client";

import { useHover } from "@/context/HoverContext";
import { useState, useEffect } from "react";
import { DropdownBanner } from "../DropdownBanner";
import SearchBanner from "../icons/nav/search/SearchBanner";

import { createPortal } from "react-dom";

export default function DropdownOverlay() {
  const { hoveredCategory, searchWasManuallyActivated } = useHover();
  const [isVisible, setIsVisible] = useState(false);
  const [lastContent, setLastContent] = useState<"search" | "dropdown" | null>(
    null
  );

  const shouldShowOverlay = hoveredCategory || searchWasManuallyActivated;

  useEffect(() => {
    if (shouldShowOverlay) {
      setIsVisible(true);
      setLastContent(hoveredCategory ? "dropdown" : "search");
    } else {
      const timer = setTimeout(() => setIsVisible(false), 300);
      return () => clearTimeout(timer);
    }
  }, [shouldShowOverlay, hoveredCategory, searchWasManuallyActivated]);

  if (!isVisible) return null;

  return createPortal(
    <div className="fixed top-[100px] left-0 w-full z-[9999] bg-white shadow-lg">
      <div className="w-2/4 mx-auto px-4 py-6">
        {lastContent === "dropdown" && (
          <DropdownBanner category={hoveredCategory ?? ""} />
        )}
        {lastContent === "search" && <SearchBanner />}
      </div>
    </div>,
    document.body
  );
}

