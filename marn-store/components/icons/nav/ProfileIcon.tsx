import { UserRound } from "lucide-react";
import IconWrapper from "./IconWrapper";
import { IconProp } from "./types";

export default function ProfileIcon({ className, size = 'md' }:  IconProp) {
    return (
        <IconWrapper ariaLabel="Profile" size={size}>
            <UserRound className={className} />
        </IconWrapper>
    )
}