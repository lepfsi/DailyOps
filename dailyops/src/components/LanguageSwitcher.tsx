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
        ${compact ? "w-full justify-start px-3 py-2 text-sm" : "px-3 py-2 rounded-xl border text-sm"}
        transition
        /* Mode clair */
        bg-gray-100 border-gray-300 text-gray-700 hover:border-gray-400
        /* Mode sombre */
        dark:bg-transparent dark:border-[#1b2a60] dark:text-gray-200 dark:hover:border-[#2BD9C5]
      `}
    >
      🌐 {lang.toUpperCase()}
    </button>
  );
}