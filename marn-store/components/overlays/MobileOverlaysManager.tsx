"use client";
import React, { useState } from "react";
import SlidingPanel from "./SlidingPanel";
// import MobileMenu from "../navigations/MobileMenu";
import MobileMenuContent from "../navigations/MobileMenuContent";
import ProfilePanelContent from "../navigations/ProfilePanelContent";
import { on } from "events";

type MobileOverlaysManagerProps = {
    isOpen: boolean;
    onClose: () => void;

}

export default function MobileOverlaysManager({isOpen, onClose}: MobileOverlaysManagerProps) {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [showProfilePanel, setShowProfilePanel] = useState(false);

    return (
        <>
            {/* Mobile menu Panel (80% width)  */}
            <SlidingPanel isOpen={isOpen} onClose={onClose} direction="left" size="lg">
                <MobileMenuContent onOpenProfilePanel={() => setShowProfilePanel(true)} />
            </SlidingPanel>

            {/* Profile Panel (full screen) */}
            <SlidingPanel isOpen={showProfilePanel} onClose={onClose}
            direction="right" size="full">
                <ProfilePanelContent onClose={() => setShowProfilePanel(false)} />
            </SlidingPanel>
        </>
    )
}