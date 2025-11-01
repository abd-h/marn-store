"use client";

import React from "react";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

export default function MainNav() {
  return (
    <header 
      className="fixed top-0 left-0 w-full z-[10000] bg-white flex flex-col overflow-x-hidden">
     <MobileNav />
      {/* <DesktopNav /> */}
    </header>
  );
}
