import type { Metadata } from "next";
import { CategorySection } from "@/components/CategorySection";

export const metadata: Metadata = {
  title: "Calculadoras e conversores online grátis",
  description:
    "IMC, porcentagem, juros compostos, conversor de moedas e mais — calculadoras gratuitas com resultado instantâneo.",
  alternates: { canonical: "https://resollvi.com.br" },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Resollvi",
  url: "https://resollvi.com.br",
};

export default function HomePage() {
  return (
    <div className="container" style={{ paddingTop: 32, paddingBottom: 48 }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />

      <div style={{ textAlign: "center", marginBottom: 40 }}>
        <h1 style={{ fontSize: 28, fontWeight: 700, margin: "0 0 8px" }}>
          Ferramentas para o seu dia a dia
        </h1>
        <p style={{ fontSize: 15, color: "var(--text-secondary)", margin: 0 }}>
          Calculadoras e conversores gratuitos, com resultado instantâneo.
        </p>
      </div>

      <CategorySection
        label="Saúde"
        tools={[
          {
            href: "/saude/imc",
            icon: "♥",
            title: "Calculadora de IMC",
            description: "Descubra seu índice de massa corporal",
          },
        ]}
      />

      <CategorySection
        label="Matemática"
        tools={[
          {
            href: "/matematica/porcentagem",
            icon: "%",
            title: "Calculadora de porcentagem",
            description: "Aumentos, descontos e proporções",
          },
        ]}
      />

      <CategorySection
        label="Finanças"
        tools={[
          {
            href: "/financas/juros-compostos",
            icon: "$",
            title: "Juros compostos",
            description: "Simule o crescimento do capital",
          },
          {
            href: "/financas/conversor-de-moedas",
            icon: "⇄",
            title: "Conversor de moedas",
            description: "Cotação atualizada",
          },
        ]}
      />

      <CategorySection
        label="Geral"
        tools={[
          {
            href: "/geral/calculadora-de-idade",
            icon: "◷",
            title: "Calculadora de idade",
            description: "Idade exata em anos, meses e dias",
          },
        ]}
      />
    </div>
  );
}
