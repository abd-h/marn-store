import React from "react";
import { cn } from "@/lib/utils";

type IconWrapperProps = {
    children: React.ReactElement<any>,
    className?: string,
    ariaLabel?: string,
    size?: "sm" | "md" | "lg",
};

const sizeMap = {
    sm: "w-6 h-4",
    md: "w-6 h-6",
    lg: "w-8 h-8",
};

export default function IconWrapper({
    children,
    className,
    ariaLabel,
    size = "lg",
}: IconWrapperProps) {

    return (
      <div
        aria-label={ariaLabel}
        className={cn(
          "flex items-center justify-center w-8 h-8 text-muted hover:text-foreground transition-colors duration-200 ease-in-out", sizeMap[size]
        )}
      >
        {React.cloneElement(children, {
          width: 24,
          height: 24,
          className: cn(
            className,
            "hover:text-black hover:scale-[1.05] transition-transform duration-200"
          ),
        })}
      </div>
    );
}