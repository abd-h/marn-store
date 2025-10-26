"use client";
import { createPortal } from "react-dom";
import { useEffect, useState } from "react";
import { useHover } from "@/context/HoverContext";

export default function SearchBackdrop() {
  const { searchWasManuallyActivated } = useHover();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || !searchWasManuallyActivated) return null;

  return createPortal(
    <div
      className={`fixed inset-0 bg-black z-40 pointer-events-none transition-opacity duration-[1200ms] ease-in-out
 ${searchWasManuallyActivated ? "bg-opacity-60" : "bg-opacity-0"}`
      }
    />,
    document.body
  );
}
