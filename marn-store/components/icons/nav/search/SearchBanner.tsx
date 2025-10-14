// components/search/SearchBanner.tsx
"use client";
import { useSearchBanner } from "@/context/SearchBannerContext";
import SearchIcon from "../SearchIcon";

export default function SearchBanner() {
  const { isOpen, close } = useSearchBanner();

  return (
    <div
      className={` w-full max-w-screen-xl mx-auto z-40 bg-white dark:bg-black transition-transform duration-300 ${
        isOpen ? "translate-y-0" : "-translate-y-full"
      } h-[60px] flex items-center px-6 shadow-md`}
    >
      <div className="flex items-center gap-4 w-full max-w-screen-xl mx-auto">
        <SearchIcon className="w-5 h-5 text-muted" />
        <input
          type="text"
          placeholder="Search"
          className="flex-grow bg-transparent border-b border-gray-300 dark:border-gray-600   outline-none text-sm px-2 py-1"
        />
        <button className="text-sm font-medium px-4 py-1 border rounded border-gray-400 dark:border-gray-600">
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
