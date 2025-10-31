import MobileTopBar from "../topbar/MobileTopBar";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navIcons } from "../icons/nav/navIcons";
import { useHover } from "@/context/HoverContext";
import React from "react";

// Main wrapper: burger, logo, icons
export default function MobileNav() {
    const pathname = usePathname();
    const {
        hoveredCategory,
        setHoveredCategory,
        searchActive,
        setSearchActive,
        } = useHover(); 
    return (
      <>
        <MobileTopBar />
        <nav
          className="relative h-[80px] overflow-x-hidden"
          onMouseLeave={() => setHoveredCategory(null)}
          aria-label="Main navigation"
        >
          <div className=" max-w-screen-xl mx-auto flex items-center justify-between px-4 h-full w-full">
            {/* Left: Logo */}
            <div className="flex items-center h-full">
              <Link href="/" aria-label="Marn homepage">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 160 40"
                  role="img"
                  aria-label="Marn logo"
                  className="fill-black dark:fill-white w-[160px] h-[40px] mobile:w-[120px] mobile:h-[30px] max-w-full"
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
            

            {/* Right: Icons */}
            <ul
              className="flex items-center gap-6 mobile:gap-3 h-full ml-auto"
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
      </>
    );
}
