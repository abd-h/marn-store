import SlidingPanel from "../overlays/SlidingPanel";
import MobileMenuContent from "./MobileMenuContent";

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
      size="lg"
    >
     <MobileMenuContent />
    </SlidingPanel>
  );
}
