import type { Metadata } from "next";
import { ToolPageLayout } from "@/components/tools/ToolPageLayout";
import { IdadeCalculator } from "@/components/tools/idade/IdadeCalculator";

export const metadata: Metadata = {
  title: "Calculadora de idade online grátis",
  description: "Calcule sua idade exata em anos, meses e dias a partir da data de nascimento.",
  alternates: { canonical: "https://resollvi.com.br/geral/calculadora-de-idade" },
  openGraph: {
    title: "Calculadora de idade online grátis",
    description: "Calcule sua idade exata com resultado instantâneo",
    url: "https://resollvi.com.br/geral/calculadora-de-idade",
    type: "website",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Calculadora de idade",
  applicationCategory: "UtilitiesApplication",
  operatingSystem: "Web",
  offers: { "@type": "Offer", price: "0", priceCurrency: "BRL" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "início", item: "https://resollvi.com.br" },
    { "@type": "ListItem", position: 2, name: "geral", item: "https://resollvi.com.br/geral" },
    { "@type": "ListItem", position: 3, name: "calculadora de idade", item: "https://resollvi.com.br/geral/calculadora-de-idade" },
  ],
};

export default function IdadePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ToolPageLayout
        breadcrumbs={[
          { label: "geral", href: "/geral" },
          { label: "calculadora de idade", href: "/geral/calculadora-de-idade" },
        ]}
        title="Calculadora de idade"
        description="Informe sua data de nascimento para calcular sua idade exata"
        supportTitle="Como a idade é calculada?"
        supportContent={
          <p>
            O cálculo compara a data de nascimento informada com a data de hoje,
            considerando o número exato de dias em cada mês (incluindo anos bissextos)
            para chegar num resultado preciso em anos, meses e dias — não é só uma
            subtração simples de anos.
          </p>
        }
        relatedTools={[
          { href: "/saude/imc", title: "calculadora de IMC" },
          { href: "/matematica/porcentagem", title: "calculadora de porcentagem" },
        ]}
      >
        <IdadeCalculator />
      </ToolPageLayout>
    </>
  );
}
