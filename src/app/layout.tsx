import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Plataforma Cursos | Aprenda no seu ritmo",
  description:
    "Descubra cursos, organize seus estudos e avance no seu ritmo com a Plataforma Cursos.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="min-h-screen bg-white font-sans text-[#20243a] antialiased">
        {children}
      </body>
    </html>
  );
}
