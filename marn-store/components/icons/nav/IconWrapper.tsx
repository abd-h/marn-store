import React from "react";
import { cn } from "@/lib/utils";

type IconWrapperProps = {
    children: React.ReactElement<any>,
    className?: string,
    ariaLabel?: string,
};

export default function IconWrapper({
    children,
    className,
    ariaLabel,
}: IconWrapperProps) {

    return (
        <div
            aria-label={ariaLabel}
            className={cn(
                "w-6 h-6 text-muted hover:text-foreground transition-colors duration-200 ease-in-out",
            )}
        >
            {React.cloneElement(children, {
                width: 24,
                height: 24,
                className: cn(className)
            })}
        </div>
    )
}