import { IconProps } from "./types";

export default function SearchIcon({title, ...props}: IconProps) {
  return (
    <svg
      id="Search_standard"
      xmlns="http://www.w3.org/2000/svg"
      width={props.width?? "18"}
      height={props.height?? "18"}
      viewBox="0 0 16 16"
          aria-hidden="true"
          aria-label={title ? title : "Search icon"}
      focusable="false"
      role="img"
      className="hover:cursor-pointer"
      {...props}
    >
      <path
        id="Union_18"
        data-name="Union 18"
        d="M10.829,11.542a6.56,6.56,0,1,1,.714-.714L16,15.286,15.287,16ZM1.01,6.561A5.55,5.55,0,1,0,6.56,1.01,5.557,5.557,0,0,0,1.01,6.561Z"
        transform="translate(0 0)"
        fill="#242127"
      ></path>
    </svg>
  );
}