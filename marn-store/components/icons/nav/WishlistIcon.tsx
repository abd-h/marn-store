import { Heart } from "lucide-react";
import IconWrapper from "./IconWrapper";
import { IconProp } from "./types";

export default function WishlistIcon({ className, size = "md" }:  IconProp) {
  return (
    <IconWrapper ariaLabel="Wishlist" size={size}>
      <Heart className={className} />
    </IconWrapper>
  );
}
