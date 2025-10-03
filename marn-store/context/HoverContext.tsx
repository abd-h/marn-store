"use client";
import { createContext, useContext, useState, ReactNode } from "react";

type HoverContextType = {
    hoveredCategory: string | null;
    setHoveredCategory: (category: string | null) => void;
}

const HoverContext = createContext<HoverContextType | undefined>(undefined);

export function HoverProvider({ children }: { children: ReactNode }) {
    const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);
    
    return (
        <HoverContext.Provider value={{
            hoveredCategory, 
            setHoveredCategory
        }}>
            {children}
        </HoverContext.Provider>
    )
}

export function useHover() {
    const context = useContext(HoverContext);
    if (!context) throw new Error("useHover must be used within a HoverProvider");
    return context;
}