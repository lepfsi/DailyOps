"use client";

import { useState } from "react";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    setStatus("idle");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (!res.ok || !data.ok) {
        setStatus("error");
        setMessage(data.message || "Impossible d'enregistrer cette adresse.");
        return;
      }

      setStatus("success");
      setMessage(data.message || "Inscription enregistrée.");
      setEmail("");
    } catch {
      setStatus("error");
      setMessage("Erreur réseau. Réessaie dans un instant.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="w-full lg:w-auto">
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Votre email..."
          required
          className="w-full sm:w-[360px] px-4 py-3 rounded-xl bg-[#0A1128] border border-[#1b2a60] focus:outline-none focus:border-[#2BD9C5] text-gray-100"
        />
        <button
          type="submit"
          disabled={loading}
          className="px-6 py-3 rounded-xl bg-[#2BD9C5] text-black font-semibold hover:opacity-90 transition disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {loading ? "Enregistrement..." : "S'inscrire"}
        </button>
      </form>

      <div className="mt-3 min-h-[24px]">
        {message ? (
          <p
            className={`text-sm ${
              status === "success" ? "text-[#2BD9C5]" : "text-red-400"
            }`}
          >
            {message}
          </p>
        ) : (
          <p className="text-xs text-gray-400">
            ~ 1 email tous les 10–15 jours — zéro spam.
          </p>
        )}
      </div>
    </div>
  );
}