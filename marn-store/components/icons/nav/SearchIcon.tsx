import { useSearchBanner } from "@/context/SearchBannerContext";
import IconWrapper from "./IconWrapper";
import { IconProp } from "./types";
import { useHover } from "@/context/HoverContext";



export default function SearchIcon({ className }: IconProp) {
  const { open } = useSearchBanner();
  const { setSearchActive } = useHover();

  return (
    <button onClick={() => setSearchActive(true)} aria-label="Open search">
      <IconWrapper ariaLabel="Search">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={className}
        >
          <path d="m21 21-4.34-4.34" />
          <circle cx="11" cy="11" r="8" />
        </svg>
      </IconWrapper>
    </button>
  );
}
