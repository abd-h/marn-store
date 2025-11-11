"use client";
import React, { useState } from "react";
import SlidingPanel from "./SlidingPanel";
import MobileMenu from "../navigations/MobileMenu";
import MobileMenuContent from "../navigations/MobileMenuContent";
import ProfilePanelContent from "../navigations/ProfilePanelContent";

type MobileOverlaysManagerProps = {
    isOpen: boolean;
    onClose: () => void;

}

export default function MobileOverlaysManager({isOpen, onClose}: MobileOverlaysManagerProps) {
    

    return (
        <>
            {/* Mobile menu Panel (80% width)  */}
            <SlidingPanel isOpen={isOpen} onClose={onClose} direction="left" size="lg">
                <MobileMenuContent  />
            </SlidingPanel>

            {/* Profile Panel (full screen) */}
            <SlidingPanel isOpen={isOpen} onClose={onClose}
            direction="right" size="full">
                <ProfilePanelContent onClose={onClose} />
            </SlidingPanel>
        </>
    )
}