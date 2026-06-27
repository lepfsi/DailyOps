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
        className="
          h-11 w-11 flex items-center justify-center rounded-xl border transition
          /* Mode clair */
          bg-gray-100 border-gray-300 text-gray-700 hover:border-gray-400
          /* Mode sombre */
          dark:bg-[#141f44] dark:border-[#334B8A] dark:text-gray-200 dark:hover:border-[#2BD9C5]
        "
        aria-label="Plus d’actions"
      >
        <MoreHorizontal size={18} />
      </button>

      {open && (
        <div
          className="
            absolute right-0 top-12 w-40 rounded-xl border p-2 flex flex-col gap-2 z-50
            /* Mode clair */
            bg-white border-gray-200 shadow-lg
            /* Mode sombre */
            dark:bg-[#0A1128] dark:border-[#1b2a60]
          "
        >
          <LanguageSwitcher compact />
          <ThemeToggle compact />
        </div>
      )}
    </div>
  );
}