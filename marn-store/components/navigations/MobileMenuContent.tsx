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

  const renderSubmenu = () => {
    switch (activeItem) {
      case "new-in":
        return <NewIn />;
      case "suits":
        return <SuitsDropdown />;
      case "coats":
        return <CoatDropdown />;
      case "casuals":
        return <CasualsDropdown />;
      case "trousers":
        return <TrousersDropdown />;
      case "shirts":
        return <ShirtsDropdown />;
      case "accessories":
        return <Accessories />;
      default:
        return null;
    }
  };

  return (
    <div className="p-6">
      {activeItem ? (
        <>
          {/* Submenu header */}
          <div className="flex items-center gap-2 mb-4">
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
        <ul className="space-y-4 text-sm font-medium">
          {navItems.map(({ key, label }) => (
            <li key={key}>
              <button
                onClick={() => setActiveItem(key)}
                className={`text-left w-full ${MobileNavItemClass}`}
              >
                {label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
