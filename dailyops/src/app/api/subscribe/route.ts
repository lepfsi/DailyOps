import { NextResponse } from "next/server";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    if (!email || typeof email !== "string" || !EMAIL_REGEX.test(email.trim())) {
      return NextResponse.json(
        { ok: false, message: "Adresse email invalide." },
        { status: 400 }
      );
    }

    const username = process.env.BUTTONDOWN_USERNAME;

    if (!username) {
      return NextResponse.json(
        { ok: false, message: "BUTTONDOWN_USERNAME n'est pas configuré." },
        { status: 500 }
      );
    }

    const form = new URLSearchParams();
    form.set("email", email.trim());
    form.set("embed", "1");
    form.set("tag", "dailyops-tech");

    const res = await fetch(
      `https://buttondown.com/api/emails/embed-subscribe/${username}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: form.toString(),
        redirect: "manual",
        cache: "no-store",
      }
    );

    // Le endpoint de form peut répondre en 2xx ou en redirection.
    if (res.status >= 200 && res.status < 400) {
      return NextResponse.json({
        ok: true,
        message: "Inscription enregistrée. Vérifie ta boîte mail si une confirmation est requise.",
      });
    }

    const text = await res.text();

    if (/already subscribed|already a subscriber|already exists/i.test(text)) {
      return NextResponse.json({
        ok: true,
        message: "Cette adresse est déjà enregistrée.",
      });
    }

    return NextResponse.json(
      {
        ok: false,
        message: "Impossible d'enregistrer cette adresse pour le moment.",
      },
      { status: 400 }
    );
  } catch {
    return NextResponse.json(
      { ok: false, message: "Erreur interne pendant l'inscription." },
      { status: 500 }
    );
  }
}