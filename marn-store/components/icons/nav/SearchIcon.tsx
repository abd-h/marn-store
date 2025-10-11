import IconWrapper from "./IconWrapper";

type SearchIconProps = {
    className?: string;
}

export default function SearchIcon({ className }:  SearchIconProps) {
  return (
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
  );
}
