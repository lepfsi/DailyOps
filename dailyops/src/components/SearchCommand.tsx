"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";

type Item = {
  title: string;
  href: string;
  section: "Networking" | "Cybersecurity" | "Infrastructure" | "Troubleshooting" | "About";
  tags?: string[];
};

const ITEMS: Item[] = [
  { title: "Networking", href: "/networking", section: "Networking", tags: ["routing", "vlan", "vpn"] },
  { title: "Cybersecurity", href: "/cybersecurity", section: "Cybersecurity", tags: ["hardening", "segmentation"] },
  { title: "Infrastructure", href: "/infrastructure", section: "Infrastructure", tags: ["virtualization", "ha", "storage"] },
  { title: "Troubleshooting", href: "/troubleshooting", section: "Troubleshooting", tags: ["rca", "incident"] },
  { title: "About", href: "/about", section: "About", tags: ["dailyops"] },
];

export default function SearchCommand() {
  const [open, setOpen] = useState(false);
  const [q, setQ] = useState("");

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      const isMac = navigator.platform.toLowerCase().includes("mac");
      const mod = isMac ? e.metaKey : e.ctrlKey;

      if (mod && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen(true);
      }
      if (e.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const results = useMemo(() => {
    const query = q.trim().toLowerCase();
    if (!query) return ITEMS;

    return ITEMS.filter((it) => {
      const hay = [
        it.title,
        it.section,
        ...(it.tags ?? []),
      ]
        .join(" ")
        .toLowerCase();
      return hay.includes(query);
    });
  }, [q]);

  return (
    <>
      {/* Desktop input (opens overlay on focus) */}
      <button
        onClick={() => setOpen(true)}
        className="hidden md:flex items-center gap-3 px-4 py-2 rounded-lg border border-[#1b2a60] bg-[#0A1128]/40 text-sm text-gray-200 hover:border-[#2BD9C5] transition"
        aria-label="Open search"
      >
        <span className="text-[#2BD9C5]">⌕</span>
        <span className="text-gray-300">Search…</span>
        <span className="ml-6 text-xs text-gray-500 border border-[#1b2a60] rounded px-2 py-0.5">
          Ctrl K
        </span>
      </button>

      {/* Mobile icon */}
      <button
        onClick={() => setOpen(true)}
        className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg border border-[#1b2a60] bg-[#0A1128]/40 text-gray-200 hover:border-[#2BD9C5] transition"
        aria-label="Open search"
      >
        <span className="text-[#2BD9C5] text-lg">⌕</span>
      </button>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm flex items-start justify-center p-4 pt-24"
          onMouseDown={() => setOpen(false)}
        >
          <div
            className="w-full max-w-2xl rounded-2xl border border-[#1b2a60] bg-[#0A1128] shadow-xl"
            onMouseDown={(e) => e.stopPropagation()}
          >
            <div className="p-4 border-b border-[#111C44]">
              <input
                autoFocus
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Search… (tags, sections, topics)"
                className="w-full px-4 py-3 rounded-xl bg-[#111C44] border border-[#1b2a60] focus:outline-none focus:border-[#2BD9C5] text-gray-100"
              />
              <p className="mt-2 text-xs text-gray-500">
                Tip: Ctrl+K / Esc to close
              </p>
            </div>

            <div className="p-2 max-h-[60vh] overflow-auto">
              {results.length === 0 ? (
                <div className="p-6 text-sm text-gray-400">
                  Aucun résultat. (On branchera les articles ensuite.)
                </div>
              ) : (
                results.map((it) => (
                  <Link
                    key={it.href}
                    href={it.href}
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between gap-4 px-4 py-3 rounded-xl hover:bg-[#111C44] transition"
                  >
                    <div className="min-w-0">
                      <p className="font-semibold text-gray-100 truncate">{it.title}</p>
                      <p className="text-xs text-gray-500 truncate">{it.section}</p>
                    </div>
                    <span className="text-xs text-[#2BD9C5] border border-[#1b2a60] rounded px-2 py-1">
                      Open
                    </span>
                  </Link>
                ))
              )}
            </div>

            <div className="p-3 border-t border-[#111C44] flex justify-end">
              <button
                onClick={() => setOpen(false)}
                className="px-4 py-2 rounded-lg border border-[#1b2a60] text-sm text-gray-200 hover:border-[#2BD9C5] transition"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
