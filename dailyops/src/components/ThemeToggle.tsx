// components/ThemeToggle.tsx
"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

interface ThemeToggleProps {
  compact?: boolean;
}

export default function ThemeToggle({ compact = false }: ThemeToggleProps) {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const dark = resolvedTheme === "dark";

  return (
    <button
      onClick={() => setTheme(dark ? "light" : "dark")}
      className={`
        ${compact ? "w-full justify-start px-3 py-2 text-sm" : "hidden md:flex items-center justify-center h-11 w-11"}
        rounded-xl border border-[#334B8A] bg-[#141f44] text-gray-200 hover:border-[#2BD9C5] transition
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