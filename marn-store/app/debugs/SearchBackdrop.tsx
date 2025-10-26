"use client";
import { createPortal } from "react-dom";
import { useEffect, useState } from "react";

export default function SearchBackdrop() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return createPortal(
    <div className="fixed inset-0 bg-black bg-opacity-40 z-40 pointer-events-none" />,
    document.body
  );
}
