"use client";
import { useHover } from "@/context/HoverContext";
import Link from "next/link";

export default function AccessoriesDropdown() {
    const { setHoveredCategory } = useHover();

   
    return (
        <li
            onMouseEnter={() => setHoveredCategory("accessories")}
            onMouseLeave={() => setHoveredCategory(null)}
            className="relative group"
        >
            <Link href="/accessories" className="hover:text-red-900 transition">
            Accessories
            </Link>
            
        </li>
    )
}