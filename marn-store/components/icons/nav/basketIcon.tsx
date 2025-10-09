import { ShoppingBag } from "lucide-react";
 import basketIcon from "@/public/icons/basket.svg";

 export default function BasketIcon(props: React.SVGProps<SVGSVGElement>) {
   return (
     <svg
       xmlns="http://www.w3.org/2000/svg"
       width="30"
       height="30"
       viewBox="0 0 24 24"
       fill="none"
       stroke="currentColor"
       strokeWidth="1.5"
       strokeLinecap="round"
       strokeLinejoin="round"
       className="lucide lucide-handbag-icon lucide-handbag"
     >
       <path d="M2.048 18.566A2 2 0 0 0 4 21h16a2 2 0 0 0 1.952-2.434l-2-9A2 2 0 0 0 18 8H6a2 2 0 0 0-1.952 1.566z" />
       <path d="M8 11V6a4 4 0 0 1 8 0v5" />
     </svg>
   );
 }