"use client";

import { createContext, useContext, useState } from "react";

const SearchBannerContext = createContext({
  isOpen: false,
  open: () => {},
  close: () => {},
});

export function SearchBannerProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);

  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);

  const contextValue = {
    isOpen,
    open,
    close,
  };

  return (
    <SearchBannerContext.Provider value={contextValue}>
      {children}{" "}
    </SearchBannerContext.Provider>
  );
}

export function useSearchBanner() {
  return useContext(SearchBannerContext);
}
