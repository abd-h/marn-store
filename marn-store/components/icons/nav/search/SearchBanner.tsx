// components/search/SearchBanner.tsx
"use client";
import { useSearchBanner } from "@/context/SearchBannerContext";
import SearchIcon from "../SearchIcon";

export default function SearchBanner() {
  const { isOpen, close } = useSearchBanner();

  return (
    <div
      className={`fixed top-0 left-0 w-full z-40 bg-white dark:bg-black transition-transform duration-300 ${
        isOpen ? "translate-y-0" : "-translate-y-full"
      } h-[60px] flex items-center px-6 shadow-md`}
    >
      <div className="flex items-center gap-4 w-full">
        <SearchIcon className="w-5 h-5 text-muted" />
        <input
          type="text"
          placeholder="Search"
          className="flex-grow bg-transparent border-none outline-none text-sm"
        />
        <button className="text-sm font-medium px-4 py-1 border rounded">
          Search
        </button>
        <button
          onClick={close}
          aria-label="Close search"
          className="text-xl font-bold px-2"
        >
          ×
        </button>
      </div>
    </div>
  );
}
