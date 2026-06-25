import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DailyOps.tech",
    description: "Notes terrain pour ingénieurs Ops, Réseau, Cybersécurité & Infrastructure",
      icons: {
          icon: "/favicon.ico",
            },
            };

            export default function RootLayout({
              children,
              }: {
                children: React.ReactNode;
                }) {
                  return (
                      <html lang="fr" className="dark">
                            <body className={`${inter.className} bg-zinc-950 text-zinc-200 antialiased`}>
                                    {children}
                                          </body>
                                              </html>
                                                );
                                                }