// NavIcons for the navigation bar
import { ReactElement } from "react";

import SearchIcon from "./SearchIcon";
import WishlistIcon from "./WishlistIcon";
import ProfileIcon from "./ProfileIcon";
import BasketIcon from "./Basket";

type NavIconItem = {
  title: string;
  href: string;
  icon: ReactElement;
};

export const navIcons: NavIconItem[] = [
  { title: "Search", href: "#", icon: <SearchIcon /> },
  { title: "Wishlist", href: "/wishlist", icon: <WishlistIcon /> },
  { title: "Profile", href: "/account", icon: <ProfileIcon /> },
  { title: "Basket", href: "/basket", icon: <BasketIcon /> },
];
