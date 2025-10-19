"use client";

import { useRef, useEffect } from "react";
import { useHover } from "@/context/HoverContext";
import SearchIcon from "../SearchIcon";

export default function SearchBanner() {
  const inputRef = useRef<HTMLInputElement>(null);
  
  const { deactivateSearch} = useHover();

  

  useEffect(() => {
    const timer = setTimeout(() => { 
      inputRef.current?.focus();
    }, 50);
    return () => clearTimeout(timer);
   }, []);

  const handleSearch = () => {
    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };

  useEffect(() => {
    console.log("SearchBanner is Mounted");
  }, [])

  return (
    <div
      className={`flex justify-between w-full mx-auto z-40 bg-white dark:bg-black transition-transform duration-300 px-4 pt-0 pb-6 ease-out`}
    >
      <div className="relative flex items-center border border-black rounded w-[90%]  px-2 ">
        <SearchIcon className="w-5 h-5 text-muted" />
        <input
          ref={inputRef}
          type="text"
          placeholder="Search"
          className="flex-grow px-4 py-4 text-sm bg-transparent outline-none placeholder:text-gray-500 placeholder:tracking-wide placeholder:text-lg"
        />
        <button
          onClick={handleSearch}
          className="absolute right-0 bg-black text-white  h-full px-12 py-2 text-lg tracking-wider font-medium uppercase"
        >
          Search
        </button>
      </div>
      <button
        onClick={deactivateSearch}
        aria-label="Close search"
        className="absolute right-8 text-6xl text-center font-thin px-2"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-8 h-8 text-black dark:text-white"
          aria-hidden="true"
        >
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>
    </div>
  );
}
