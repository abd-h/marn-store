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
import NewIn from "../nav/new-in";
import WishlistIcon from "../icons/nav/WishlistIcon";
import SearchIcon from "../icons/nav/SearchIcon";
import ProfileIcon from "../icons/nav/ProfileIcon";
import BasketIcon from "../icons/nav/basketIcon";

export default function MainNav() {
  const { hoveredCategory, setHoveredCategory } = useHover();
  return (
    <nav
      className="relative z-50 border-b border-gray-300 h-[60px]"
      onMouseLeave={() => setHoveredCategory(null)}
      aria-label="Main navigation"
    >
      <div className=" max-w-screen-xl mx-auto flex items-center justify-between px-4 h-full">
        {/* Left: Logo*/}
        <div className="absolute left-20 justify-start flex items-center h-full">
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
          className="px-2 mx-8 flex space-x-14 text-sm font-medium justify-center items-center h-full absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          role="list"
        >
          {" "}
          <NewIn />
          <SuitsDropdown />
          <CoatDropdown />
          <CasualsDropdown />
          <TrousersDropdown />
          <ShirtsDropdown />
          <AccessoriesDropdown />
        </ul>

        {/** Right: Icons */}
        <ul
          className=" absolute right-8 space-x-8 px-2 flex gap-4 justify-between items-center h-full "
          role="list"
        >
          <li>
            <SearchIcon />
          </li>
          <li>
            <WishlistIcon />
          </li>
          <li>
            <ProfileIcon />
          </li>
          <li>
            <BasketIcon />
          </li>
        </ul>
      </div>
      {/** Shared dropdown container */}
      {hoveredCategory && <DropdownOverlay />}
    </nav>
  );
}
