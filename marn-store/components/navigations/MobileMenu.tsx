import SlidingPanel from "../overlays/SlidingPanel";

type MobileMenuProps = {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

export default function MobileMenu({ isOpen, onClose, children }: MobileMenuProps) {
  return (
    <SlidingPanel
      isOpen={isOpen}
      onClose={onClose}
      direction="left"
      size="w-[80%]"
    >
      {children}
    </SlidingPanel>
  );
}
