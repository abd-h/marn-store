"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

import SearchBanner from "../icons/nav/search/SearchBanner";
import SuitsDropdown from "../nav/SuitsDropdown";

import CoatDropdown from "../nav/CoatDropdown";
import CasualsDropdown from "../nav/CasualsDropdown";
import TrousersDropdown from "../nav/TrousersDropdown";
import ShirtsDropdown from "../nav/ShirtsDropdown";
import AccessoriesDropdown from "../nav/Accessories";
import DropdownOverlay from "../nav/DropdownOverlay";
import { useHover } from "@/context/HoverContext";
import NewIn from "../nav/new-in";

import { navIcons } from "../icons/nav/navIcons";
import React from "react";
import TopBar from "./TopBar";

export default function MainNav() {
  const { hoveredCategory, setHoveredCategory, searchActive, setSearchActive } = useHover();
  const pathname = usePathname();

  const shouldShowOverlay = hoveredCategory || searchActive;

  return (
    <header className="w-full z-100 flex flex-col">
      <TopBar />
      <nav
        className="relative z-50  h-[80px]"
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
            className=" px-2 mx-8 flex space-x-14 text-sm font-medium justify-around items-center h-full absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            role="list"
            onMouseEnter={() => setSearchActive(false)}
            
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
            className=" absolute right-8 px-2 flex gap-6 items-center h-full"
            role="list"
          >
            {navIcons.map(({ icon, href, title }) => {
              const isActive = pathname === href;
              return (
                <li key={title}>
                  <Link aria-label={title} href={href}>
                    {React.isValidElement(icon) &&
                      React.cloneElement(
                        icon as React.ReactElement<{ className?: string }>,
                        {
                          className: `${
                            (icon.props as { className?: string })?.className ||
                            ""
                          } ${isActive ? "text-foreground" : "text-muted"}`,
                        }
                      )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        {/** Shared dropdown container */}
        <DropdownOverlay />
      </nav>
     
    </header>
  );
}
