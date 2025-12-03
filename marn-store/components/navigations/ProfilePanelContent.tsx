// Right-side login form
"use client";
import React, { useState } from "react";
import Link from "next/link";
import { X } from "lucide-react";
import { useRouter } from "next/navigation";
import DynamicForm from "../forms/DynamicForm";
import { loginFields } from "../forms/loginFields";

type ProfilePanelContentProps = {
  onClose: () => void;
};

export default function ProfilePanelContent({
  onClose,
}: ProfilePanelContentProps) {
    const [formType, setFormType] = useState<"login" | "signup">("login");
  const router = useRouter();

  function handleLogout() {
    // Replace this with the logout logic
    router.push("/login");
  }

  return (
    <div className="relative flex flex-col h-screen w-screen bg-white text-[18px] tracking-wide ">
      {/* Header */}
      <div className="flex items-center justify-between px-[5%] py-3">
        <h2 className="text-lg my-4 font-semibold tracking-widest">Login</h2>
        <button
          onClick={onClose}
          aria-label="Close profile panel"
          className="bg-gray-100 p-1 border-2 border-transparent rounded-full text-muted hover:text-foreground transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Login Form */}

      <div className="flex-grow p-8 overflow-y-auto">
        {/* Register prompt */}

        <p className="my-4 space-y-4 text-sm tracking-widest font-semibold">
          Don&apos;t have an account?
          <Link href="/register" className="px-2 hover:underline">
            Sign up
          </Link>
        </p>
        {/* Dynamic login or signup form */}
        <DynamicForm fields={loginFields} buttonLabel="SIGN IN" />
        <p className="mt-2 font-semibold text-sm text-gray-600">
          <Link href="/reset-password" className=" hover:underline">
            Forgotten your password?
          </Link>
        </p>
        <div className="w-full my-8  text-center px-4">
          <button onClick={onClose} className="underline tracking-widest">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
