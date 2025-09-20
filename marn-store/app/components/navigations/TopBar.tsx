"use client";

import PromoTicker from "./PromoTicker";

export default function TopBar() {
  return (
    <header className="bg-newtral-100 text-[12px] text-black font-[600] border-b border-gray-300">
      <nav
        aria-label="Top navigation"
        className="max-w-screen-2xl mx-auto flex flex-col md:flex-row justify-between items-center h-[40px] px-4 gap-2 md:gap-0 tracking-[0.15em]"
      >
        {/* Left section*/}

        <ul className="flex flex-wrap justify-center md:justify-start h-full items-stretch divide-x divide-gray-300 role=list">
          <li className="px-8 flex items-center h-full">
            <a
              href="#"
              className="hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus-ring-black"
            >
              Marn Hire
            </a>
          </li>
          <li className="px-8 flex items-center h-full">
            <a
              href="#"
              className="hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus-ring-black"
            >
              Gift Cards
            </a>
          </li>
          <li className="px-8 flex items-center border-r-2 border-gray-300">
            <a
              href="#"
              className="hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus-ring-black "
            >
              Editorial
            </a>
          </li>
        </ul>

        {/* Central section*/}
        <div className="w-full md:w-1/3 text-center" aria-live="polite">
          <PromoTicker />
        </div>
        {/* Right section*/}
        <ul className="flex flex-wrap justify-center md:justify-end h-full items-stretch  divide-x divide-gray-300 role=list ">
          <li className="px-8 flex items-center  border-l-2 border-gray-300">
            <a
              href="#"
              className="hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus-ring-black"
            >
              Find a store
            </a>
          </li>
          <li className="px-8 flex items-center">
            <a href="#">
              GBP £ <span className="text-xl px-[2px]">⌵ </span>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
