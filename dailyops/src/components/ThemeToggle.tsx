"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
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
      className="
        hidden md:flex           /* ← RESTAURÉ : caché sur mobile, visible sur desktop */
        items-center
        justify-center
        h-11
        w-11
        rounded-xl
        border
        border-[#334B8A]         /* ← bordure plus claire (au lieu de #1b2a60) */
        bg-[#141f44]             /* ← fond un peu plus clair que le header */
        text-gray-200
        hover:border-[#2BD9C5]
        transition
      "
      aria-label="Changer le thème"
    >
      {dark ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}