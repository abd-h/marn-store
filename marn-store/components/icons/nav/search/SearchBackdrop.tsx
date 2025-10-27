import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { useHover } from "@/context/HoverContext";

export default function SearchBackdrop() {
  const { searchWasManuallyActivated } = useHover();
  const [visible, setVisible] = useState(false);
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    if (searchWasManuallyActivated) {
      setVisible(true);
      requestAnimationFrame(() => setOpacity(0.6)); // fade in
    } else {
      setOpacity(0); // fade out
      const timer = setTimeout(() => setVisible(false), 1800); // match fade duration
      return () => clearTimeout(timer);
    }
  }, [searchWasManuallyActivated]);

  if (!visible) return null;

  return createPortal(
    <div
      className="fixed inset-0 bg-black z-40 pointer-events-none transition-opacity duration-[1200ms] ease-in-out"
      style={{ opacity }}
    />,
    document.body
  );
}
