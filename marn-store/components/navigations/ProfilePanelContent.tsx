// Right-side login form
"use client";
import React from "react";
import Link from "next/link";
import { X } from "lucide-react";
import { useRouter } from "next/navigation";

type ProfilePanelContentProps = {
    onClose: () => void;
};

export default function ProfilePanelContent({ onClose }: ProfilePanelContentProps) {
    const router = useRouter();

    function handleLogout() {
        // Replace this with the logout logic
        router.push("/login");
    }

    return (
        <div className="flex flex-col h-screen w-screen bg-white" >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-300 w-[50%] mx-auto">
                <h2 className="text-lg font-semibold tracking-wide" >Login</h2>
                <button onClick={onClose}
                    aria-label="Close profile panel"
                    className="text-muted hover:text-foreground transition-colors">
                    <X className="w-5 h-5" />
                </button>
            </div>
            {/* Login Form */}
            <div className="flex-grow p-6 overflow-y-auto">
                <form className="space-y-4">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
                    >
                        Login
                    </button>
                </form>
                <p className="mt-4 text-center text-sm text-gray-600">
                    Don't have an account?{" "}
                    <Link href="/register" className="text-blue-600 hover:underline">
                        Register
                    </Link>
                </p>

            </div>
        </div>
    )
}