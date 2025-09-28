"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

const navItems = [
  { label: "New In", href: "/new" },
  { label: "Suits", href: "/suits" },
  { label: "Coats", href: "coats" },
  { label: "Casuals", href: "casuals" },
  { label: "Trousers", href: "trousers" },
  { label: "Shirts", href: "shirts" },
  { label: "Shoes & Accessories", href: "accessories" },
];

const navLinkClass =
  "relative pb-1 text-neutral-700 hover:underline hover:text-black transition-all duration-200 ease-out focus:outline-none focus:ring-0 focus:ring-offset-0 focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 active:outline-none";

export default function MainNav() {
  const pathname = usePathname();

  return (
    <nav
      className="border-b border-gray-300 h-[60px]"
      aria-label="Main navigation"
    >
      <div className="max-w-screen-xl mx-auto flex items-center justify-between px-4 h-full">
        {/* Left: Logo*/}
        <div className="flex items-center h-full">
          <Link href="/" aria-label="Marn homepage">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="160"
              height="40"
              viewBox="0 0 160 40"
              role="img"
              aria-label="Marn logo"
              className="fill-black dark:fill-white"
            >
              <text
                x="0"
                y="28"
                fontFamily="Georgia, Times, serif"
                fontSize="28"
                fontWeight="600"
                letterSpacing="4"
              >
                MARN
              </text>
            </svg>
          </Link>
        </div>
        {/** Center: Category Links */}
        <ul
          className="hidden md:flex gap-6 text-sm h-full items-center  tracking-wide"
          role="menubar"
        >
          {navItems.map(({ label, href }) => (
            <li
              key={label}
              role="none"
              className="relative h-full flex items-center group"
            >
              <Link
                href={href}
                role="menuitem"
                className={`${navLinkClass}
`}
                style={{outline:'none'}}
              >
                {label}
              </Link>
              {/** Placeholder for drop down banner */}
              <div className="absolute left-0 top-full w-screen bg-white shadow-lg hidden group-hover:block">
                {/** Future: dynamic sub-links go here */}
              </div>
            </li>
          ))}
        </ul>
        {/** Right: Icons */}
        <ul className="flex gap-4 items-center h-full " role="list">
          <li>
            <button
              aria-label="Search"
              className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
            >
              🔍
            </button>
          </li>
          <li>
            <button
              aria-label="Wishlist"
              className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
            >
              🤍
            </button>
          </li>
          <li>
            <button
              aria-label="Profile"
              className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
            >
              👤
            </button>
          </li>
          <li>
            <button
              aria-label="Basket"
              className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
            >
              🛒
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
