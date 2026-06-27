// components/MobileActionsDropdown.tsx
"use client";

import { useState, useRef, useEffect } from "react";
import { MoreHorizontal } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";
import LanguageSwitcher from "@/components/LanguageSwitcher";

export default function MobileActionsDropdown() {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative md:hidden" ref={dropdownRef}>
      <button
        onClick={() => setOpen(!open)}
        className="h-11 w-11 flex items-center justify-center rounded-xl border border-[#334B8A] bg-[#141f44] text-gray-200 hover:border-[#2BD9C5] transition"
        aria-label="Plus d’actions"
      >
        <MoreHorizontal size={18} />
      </button>

      {open && (
        <div className="absolute right-0 top-12 w-40 bg-[#0A1128] border border-[#1b2a60] rounded-xl p-2 flex flex-col gap-2 z-50">
          <LanguageSwitcher compact />
          <ThemeToggle compact />
        </div>
      )}
    </div>
  );
}