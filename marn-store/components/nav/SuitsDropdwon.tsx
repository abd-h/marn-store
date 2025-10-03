"use client";
import { useHover } from "@/context/HoverContext";
import { DropdownBanner } from "../DropdownBanner";

export default function SuitsDropdown() {
    const { hoveredCategory, setHoveredCategory } = useHover();

    const isHovered = hoveredCategory === "Suits";

    return (
      <li
        onMouseEnter={() => setHoveredCategory("Suits")}
        onMouseLeave={() => setHoveredCategory(null)}
        className="relative group"
      >
        <a href="/suits" className="hover:text-red-900 transition">
          Suits
        </a>
        
          <div
            className={`absolute left-0 top-full w-screen bg-white shadow-lg transition-all duration-300 ease-out ${
              isHovered
                ? "opacity-100 translate-y-0 pointer-events-auto"
                : "opacity-0 -translate-y-4 pointer-events-none"
            }`}
          >
            <DropdownBanner category="suits" />
          </div>
       
      </li>
    );
}