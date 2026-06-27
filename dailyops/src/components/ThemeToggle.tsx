// components/ThemeToggle.tsx
"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useState } from "react";

interface ThemeToggleProps {
  compact?: boolean;
}

export default function ThemeToggle({ compact = false }: ThemeToggleProps) {
  const { resolvedTheme, setTheme } = useTheme();

  // Initialise mounted à true uniquement côté client, sans effet
  const [mounted, setMounted] = useState(() => typeof window !== "undefined");

  if (!mounted) return null;

  const dark = resolvedTheme === "dark";

  return (
    <button
      onClick={() => setTheme(dark ? "light" : "dark")}
      className={`
        ${compact ? "w-full justify-start px-3 py-2 text-sm" : "hidden md:flex items-center justify-center h-11 w-11"}
        rounded-xl border transition
        /* Mode clair */
        bg-gray-100 border-gray-300 text-gray-700 hover:border-gray-400
        /* Mode sombre */
        dark:bg-[#141f44] dark:border-[#334B8A] dark:text-gray-200 dark:hover:border-[#2BD9C5]
      `}
      aria-label="Changer le thème"
    >
      {compact ? (
        <span className="flex items-center gap-2">
          {dark ? <Sun size={16} /> : <Moon size={16} />}
          {dark ? "Mode clair" : "Mode sombre"}
        </span>
      ) : (
        dark ? <Sun size={18} /> : <Moon size={18} />
      )}
    </button>
  );
}