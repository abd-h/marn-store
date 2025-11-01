// Full-featured desktop navigation
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import SuitsDropdown from "../nav/SuitsDropdown";
import CoatDropdown from "../nav/CoatDropdown";
import CasualsDropdown from "../nav/CasualsDropdown";
import TrousersDropdown from "../nav/TrousersDropdown";
import ShirtsDropdown from "../nav/ShirtsDropdown";
import AccessoriesDropdown from "../nav/Accessories";
import { useHover } from "@/context/HoverContext";
import NewIn from "../nav/new-in";
import { navIcons } from "../icons/nav/navIcons";
import TopBar from "../topbar/TopBar";
import { DropdownBanner } from "../DropdownBanner";


export default function DesktopNav() {
  const { hoveredCategory, setHoveredCategory, searchActive, setSearchActive } =
    useHover();
  const pathname = usePathname();
    return (
      <>
        {" "}
        <TopBar />
        <div className="relative" onMouseLeave={() => setHoveredCategory(null)}>
          <nav
            className="relative h-[80px] overflow-x-hidden"
            aria-label="Main navigation"
          >
            <div className=" max-w-screen-2xl mx-auto flex flex-1 items-center justify-between px-4 h-full w-full">
              {/* Left: Logo */}
              <div className="flex items-center h-full">
                <Link href="/" aria-label="Marn homepage">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 160 40"
                    role="img"
                    aria-label="Marn logo"
                    className="fill-black dark:fill-white w-[160px] h-[40px]  max-w-full"
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

              {/* Center: Category Links (hidden on mobile) */}
              <ul
                className="flex space-x-14 text-sm font-medium justify-center items-center h-full px-2"
                role="list"
                onMouseEnter={() => setSearchActive(false)}
              >
                <NewIn />
                <SuitsDropdown />
                <CoatDropdown />
                <CasualsDropdown />
                <TrousersDropdown />
                <ShirtsDropdown />
                <AccessoriesDropdown />
              </ul>

              {/* Right: Icons */}
              <ul
                className="flex items-center gap-6 h-full"
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
                                (icon.props as { className?: string })
                                  ?.className || ""
                              } ${isActive ? "text-foreground" : "text-muted"}`,
                            }
                          )}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </nav>
          {hoveredCategory && <DropdownBanner category={hoveredCategory} />}
        </div>
      </>
    );
}
