// components/LanguageSwitcher.tsx
"use client";

import { useState } from "react";

interface LanguageSwitcherProps {
  compact?: boolean;
}

export default function LanguageSwitcher({ compact = false }: LanguageSwitcherProps) {
  const [lang, setLang] = useState<"fr" | "en">("en");

  return (
    <button
      onClick={() => setLang(lang === "en" ? "fr" : "en")}
      className={`
        ${compact ? "w-full justify-start px-3 py-2 text-sm" : "px-3 py-2 rounded-xl border border-[#1b2a60] text-sm hover:border-[#2BD9C5] transition"}
      `}
    >
      🌐 {lang.toUpperCase()}
    </button>
  );
}