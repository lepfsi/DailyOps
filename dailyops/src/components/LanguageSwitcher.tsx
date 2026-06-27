"use client";

import { useState } from "react";

export default function LanguageSwitcher() {
  const [lang, setLang] = useState<"fr" | "en">("en");

  return (
    <button
      onClick={() => setLang(lang === "en" ? "fr" : "en")}
      className="px-3 py-2 rounded-xl border border-[#1b2a60]
                 text-sm hover:border-[#2BD9C5] transition"
    >
      🌐 {lang.toUpperCase()}
    </button>
  );
}