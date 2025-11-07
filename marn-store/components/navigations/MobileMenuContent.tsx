"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";

// Import dropdown components
import NewIn from "../nav/new-in";
import SuitsDropdown from "../nav/SuitsDropdown";
import CoatDropdown from "../nav/CoatDropdown";
import CasualsDropdown from "../nav/CasualsDropdown";
import TrousersDropdown from "../nav/TrousersDropdown";
import ShirtsDropdown from "../nav/ShirtsDropdown";
import Accessories from "../nav/Accessories";
import { MobileNavItemClass } from "@/lib/styles";
import MobileDropdownBanner from "../MobileDropdownBanner";
import WishlistIcon from "../icons/nav/WishlistIcon";
import ProfileIcon from "../icons/nav/ProfileIcon";


type NavItemKey =
  | "new-in"
  | "suits"
  | "coats"
  | "casuals"
  | "trousers"
  | "shirts"
  | "accessories"
  | null;

const navItems: { key: NavItemKey; label: string }[] = [
  { key: "new-in", label: "New In" },
  { key: "suits", label: "Suits" },
  { key: "coats", label: "Coats" },
  { key: "casuals", label: "Casuals" },
  { key: "trousers", label: "Trousers" },
  { key: "shirts", label: "Shirts" },
  { key: "accessories", label: "Accessories" },
];

export default function MobileMenuContent() {
  const [activeItem, setActiveItem] = useState<NavItemKey>(null);

//  const renderSubmenu = () => {
//     switch (activeItem) {
//       case "new-in":
//         return <NewIn />;
//       case "suits":
//         return <SuitsDropdown />;
//       case "coats":
//         return <CoatDropdown />;
//       case "casuals":
//         return <CasualsDropdown />;
//       case "trousers":
//         return <TrousersDropdown />;
//       case "shirts":
//         return <ShirtsDropdown />;
//       case "accessories":
//         return <Accessories />;
//       default:
//         return null;
//     }
//   };

  const renderSubmenu = () => {
    if (!activeItem) return null;
    return <MobileDropdownBanner category={activeItem} />;
  }
  
  return (
    <div className="w-full px-2 py-6 h-full overflow-y-auto">
      {activeItem ? (
        <>
          {/* Submenu header */}
          <div className=" w-full flex items-center gap-2 mb-4">
            <button
              onClick={() => setActiveItem(null)}
              aria-label="Back to main menu"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <span className="text-lg font-semibold">
              {navItems.find((item) => item.key === activeItem)?.label}
            </span>
          </div>

          {/* Submenu content */}
          <div>{renderSubmenu()}</div>
        </>
      ) : (
          <div>
            {/* Moble menu icons */}
          <div className="flex justify-between items-center  w-full border-b-[1px] border-gray-300">
            {" "}
            <div className="relative p-2 text-xs flex justify-start items-center w-1/3 ">
              <span className="">GBP £</span>{" "}
              <span className="absolute top-1 right-4 h-full">⌵</span>
            </div>
            <div className="flex justify-around p-4 w-1/2">
              <WishlistIcon size="sm" />
              <ProfileIcon size="sm" />
            </div>
          </div>

          <ul className=" w-full text-sm font-light">
            {navItems.map(({ key, label }) => (
              <li className="py-4 border-b-[1px] border-gray-300" key={key}>
                {/* Mobile menu navitems */}
                <button
                  onClick={() => setActiveItem(key)}
                  className={`font-light p-2  text-left w-full ${MobileNavItemClass}`}
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
