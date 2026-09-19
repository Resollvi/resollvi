import type { Metadata } from "next";
import { ToolPageLayout } from "@/components/tools/ToolPageLayout";
import { ImcCalculator } from "@/components/tools/imc/ImcCalculator";

export const metadata: Metadata = {
  title: "Calculadora de IMC online grátis",
  description:
    "Calcule seu IMC informando peso e altura. Descubra sua faixa de peso ideal com resultado instantâneo e gratuito.",
  alternates: { canonical: "https://resollvi.com.br/saude/imc" },
  openGraph: {
    title: "Calculadora de IMC online grátis",
    description: "Calcule seu IMC com resultado instantâneo",
    url: "https://resollvi.com.br/saude/imc",
    type: "website",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Calculadora de IMC",
  applicationCategory: "HealthApplication",
  operatingSystem: "Web",
  offers: { "@type": "Offer", price: "0", priceCurrency: "BRL" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "início", item: "https://resollvi.com.br" },
    { "@type": "ListItem", position: 2, name: "saúde", item: "https://resollvi.com.br/saude" },
    { "@type": "ListItem", position: 3, name: "IMC", item: "https://resollvi.com.br/saude/imc" },
  ],
};

export default function ImcPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <ToolPageLayout
        breadcrumbs={[{ label: "saúde", href: "/saude" }, { label: "imc", href: "/saude/imc" }]}
        title="Calculadora de IMC"
        description="Informe peso e altura para calcular seu índice de massa corporal"
        supportTitle="O que é IMC?"
        supportContent={
          <p>
            O Índice de Massa Corporal (IMC) é calculado dividindo o peso (em kg) pela
            altura ao quadrado (em metros). É uma referência rápida usada pela Organização
            Mundial da Saúde para classificar faixas de peso, mas não substitui uma
            avaliação médica — fatores como massa muscular e composição corporal não
            entram na conta.
          </p>
        }
        relatedTools={[
          { href: "/geral/calculadora-de-idade", title: "calculadora de idade" },
          { href: "/matematica/porcentagem", title: "calculadora de porcentagem" },
        ]}
      >
        <ImcCalculator />
      </ToolPageLayout>
    </>
  );
}
