import { UserRound } from "lucide-react";
import IconWrapper from "./IconWrapper";
import { IconProp } from "./types";

export default function ProfileIcon({ className }:  IconProp) {
    return (
        <IconWrapper ariaLabel="Profile">
            <UserRound  />
        </IconWrapper>
    )
}