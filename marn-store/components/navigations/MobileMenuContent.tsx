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
import SlidingPanel from "../overlays/SlidingPanel";
import ProfilePanelContent from "@/components/navigations/ProfilePanelContent";
import MobileOverlaysManager from "../overlays/MobileOverlaysManager";

type NavItemKey =
  | "new-in"
  | "suits"
  | "coats"
  | "casuals"
  | "trousers"
  | "shirts"
  | "accessories"
  | null;

// type MobileMenuContentProps = {
//   onOpenProfilePanel: () => void;
// }  

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
  const [showProfilePanel, setShowProfilePanel] = useState(false);

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
  };

  return (
    <div className="w-full py-2 h-full overflow-y-auto">
      {activeItem ? (
        <>
          {/* Submenu header */}
          <div className="relative w-full flex items-center mb-4 border-b border-gray-300 pb-2">
            <button
              onClick={() => setActiveItem(null)}
              aria-label="Back to main menu"
              className="p-2"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <span className="absolute left-1/2 transform -translate-x-1/2 text-sm tracking-wider font-semibold">
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
            <div className="relative py-4 px-4 text-xs flex justify-start items-center ">
              <span className="font-semibold text-[12px] tracking-widest">
                GBP £
              </span>{" "}
              <span className="absolute top-3 right-0 h-full font-bold">⌵</span>
            </div>
            <div className="flex justify-around p-4 w-1/3">
              <WishlistIcon size="sm" />
              <ProfileIcon
                onClick={() => setShowProfilePanel(true)}
                size="sm"
              />
            </div>
          </div>

          <ul className="p-2 w-full ">
            {navItems.map(({ key, label }) => (
              <li className="py-4 border-b-[1px] border-gray-300 " key={key}>
                {/* Mobile menu navitems */}
                <button
                  onClick={() => setActiveItem(key)}
                  className={`font-semibold tracking-wider text-[13px] p-2  text-left w-full  ${MobileNavItemClass}`}
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
      
      <SlidingPanel isOpen={showProfilePanel} onClose={() => setShowProfilePanel(false)}>
        <ProfilePanelContent
         
          onClose={() => setShowProfilePanel(false)}
        />
      </SlidingPanel>
    </div>
  );
}
