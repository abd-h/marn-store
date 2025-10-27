"use client";
import { useEffect, useState } from "react";

import SearchBackdrop from "./SearchBackdrop";
import DropdownOverlay from "@/components/nav/DropdownOverlay";
import { useHover } from "@/context/HoverContext";

export default function OverlayLayer() {
  const [isBackdropVisible, setIsBackdropVisible] = useState(false);
  const { searchWasManuallyActivated } = useHover();
  useEffect(() => {
    if (searchWasManuallyActivated) {
      setIsBackdropVisible(true);
    } else {
      const timer = setTimeout(() => setIsBackdropVisible(false), 1200);

      return () => clearTimeout(timer);
    }
    
  }, [searchWasManuallyActivated]);
  return (
    <>
      <DropdownOverlay />
      <SearchBackdrop />
    </>
  );
}
