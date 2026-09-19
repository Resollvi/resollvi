import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CookieConsent } from "@/components/CookieConsent";
import { ConsentedScripts } from "@/components/ConsentedScripts";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://resollvi.com.br"),
  title: {
    default: "Resollvi — calculadoras e conversores online grátis",
    template: "%s | Resollvi",
  },
  description:
    "Calculadoras e conversores gratuitos para o seu dia a dia, com resultado instantâneo.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <CookieConsent />
        <ConsentedScripts />
      </body>
    </html>
  );
}
