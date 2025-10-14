"use client";
import { createContext, useContext, useState, ReactNode } from "react";

type HoverContextType = {
    hoveredCategory: string | null;
    setHoveredCategory: (category: string | null) => void;
    searchActive: boolean;
    setSearchActive: (active: boolean) => void;
}

const HoverContext = createContext<HoverContextType | undefined>(undefined);

export function HoverProvider({ children }: { children: ReactNode }) {
    const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);
    const [searchActive, setSearchActive] = useState<boolean>(false);

    const contextValue = {
        hoveredCategory, 
        setHoveredCategory,
        searchActive,
        setSearchActive,
    }
    
    return (
        <HoverContext.Provider value={contextValue}>
            {children}
        </HoverContext.Provider>
    )
}

export function useHover() {
    const context = useContext(HoverContext);
    if (!context) throw new Error("useHover must be used within a HoverProvider");
    return context;
}