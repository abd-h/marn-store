import SlidingPanel from "@/components/overlays/SlidingPanel";
import ProfilePanelContent from "./ProfilePanelContent";


type MobileMenuProps = {
    isOpen: boolean;
    onClose: () => void;
    children?: React.ReactNode;
};

export default function ProfileMenu({ isOpen, onClose }: MobileMenuProps) {
    return (
        <SlidingPanel
            isOpen={isOpen}
        onClose={onClose} direction="right" size="full">
           <ProfilePanelContent onClose={onClose} />
        </SlidingPanel>
    )
}