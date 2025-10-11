import { Heart } from "lucide-react";
import IconWrapper from "./IconWrapper";
import { IconProp } from "./types";

export default function WishlistIcon({ className }:  IconProp) {
  return (
    <IconWrapper ariaLabel="Wishlist">
      <Heart  />
    </IconWrapper>
  );
}
