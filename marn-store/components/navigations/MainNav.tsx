"use client";
import Link from "next/link";

import SuitsDropdown from "../nav/SuitsDropdwon";

import CoatDropdown from "../nav/CoatDropdown";
import CasualsDropdown from "../nav/CasualsDropdown";
import TrousersDropdown from "../nav/TrousersDropdown";
import ShirtsDropdown from "../nav/ShirtsDropdown";
import AccessoriesDropdown from "../nav/Accessories";
import DropdownOverlay from "../nav/DropdownOverlay";
import { useHover } from "@/context/HoverContext";

export default function MainNav() {
  const { hoveredCategory, setHoveredCategory } = useHover();
  return (
    <nav
      className="relative z-50 border-b border-gray-300 h-[60px]"
      onMouseLeave={() => setHoveredCategory(null)}
      aria-label="Main navigation"
    >
      <div className="max-w-screen-xl mx-auto flex items-center justify-between px-4 h-full">
        {/* Left: Logo*/}
        <div className="flex items-center h-full">
          <Link href="/" aria-label="Marn homepage">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="160"
              height="40"
              viewBox="0 0 160 40"
              role="img"
              aria-label="Marn logo"
              className="fill-black dark:fill-white"
            >
              <text
                x="0"
                y="28"
                fontFamily="Georgia, Times, serif"
                fontSize="28"
                fontWeight="600"
                letterSpacing="4"
              >
                MARN
              </text>
            </svg>
          </Link>
        </div>
        {/** Center: Category Links */}
        <ul
          className="flex space-x-6 text-sm font-medium w-full justify-center items-center h-full"
          role="list"
        >
          {" "}
          <SuitsDropdown />
          <CoatDropdown />
          <CasualsDropdown />
          <TrousersDropdown />
          <ShirtsDropdown />
          <AccessoriesDropdown />
        </ul>

        {/** Right: Icons */}
        <ul className="flex gap-4 items-center h-full " role="list">
          <li>
            <button
              aria-label="Search"
              className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
            >
              🔍
            </button>
          </li>
          <li>
            <button
              aria-label="Wishlist"
              className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
            >
              🤍
            </button>
          </li>
          <li>
            <button
              aria-label="Profile"
              className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
            >
              👤
            </button>
          </li>
          <li>
            <button
              aria-label="Basket"
              className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
            >
              🛒
            </button>
          </li>
        </ul>
      </div>
      {/** Shared dropdown container */}
      {hoveredCategory && <DropdownOverlay />}
    </nav>
  );
}
