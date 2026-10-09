import type { Metadata } from "next";
import type { ReactNode } from "react";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  applicationName: "MStrampos",
  title: "MStrampos | Aprenda no seu ritmo",
  description:
    "Descubra cursos, organize seus estudos e avance no seu ritmo com a MStrampos.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="pt-BR" data-theme="dark" suppressHydrationWarning>
      <body className="min-h-screen bg-canvas font-sans text-foreground antialiased">
        {children}
        <Script id="theme-preference" strategy="beforeInteractive">
          {`(() => {
            try {
              const savedTheme = window.localStorage.getItem("plataforma-cursos-theme");
              document.documentElement.dataset.theme = savedTheme === "light" ? "light" : "dark";
            } catch {
              document.documentElement.dataset.theme = "dark";
            }
          })();`}
        </Script>
      </body>
    </html>
  );
}
