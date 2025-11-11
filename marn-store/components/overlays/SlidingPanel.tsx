// Reusable panel logic
"use client";

import React from "react";

type PanelSize = "sm" | "md" | "lg" | "full";

type Direction = "left" | "right" | "top" | "bottom";

type SlidingPanelProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  direction?: Direction;
  size?: PanelSize;
};

const sizeMap: Record<PanelSize, string> = {
  sm: "w-[300px]",
  md: "w-[500px]", 
  lg: "w-[80%]", 
  full: "w-screen",
}


export default function SlidingPanel({
  isOpen,
  onClose,
  children,
  direction = "left",
  size = "lg",
}: SlidingPanelProps) {

  const basePosition = {
    left: "top-0 left-0",
    right: "top-0 right-0",
    top: "top-0 left-0",
    bottom: "bottom-0 left-0",
  };

  const baseTransform = {
    left: "-translate-x-full",
    right: "translate-x-full",
    top: "-translate-y-full",
    bottom: "translate-y-full",
  };
    
    const activeTransform = "translate-x-0 translate-y-0";

    // const dimensionClass =
    //     direction === "top" || direction === "bottom" ? size : `${size} h-screen`;
    
  const dimensionClass = direction === "top" || direction === "bottom"
    ? `${sizeMap[size || "lg"]} h-[300px]`
    : `${sizeMap[size || "lg"]} h-screen`;
    return (
        <>
            {/* Backdrop */}
            <div className={`fixed inset-0 bg-black bg-opacity-40 z-[9998] transition-opacity duration-300
                ${isOpen 
                ? "opacity-100 pointer-events-auto"
                : "opacity-0 pointer-events-none"
                }`}
                onClick={onClose}
                aria-hidden="true"
            />
            {/* Panel */}
            <div
                className={`fixed ${basePosition[direction]} ${dimensionClass} bg-white z-[9999] shadow-lg transition-transform duration-300 overflow-auto ${
                    isOpen ? activeTransform : baseTransform[direction]
            } `} >
                {children}
            </div>
        </>
    )
}
