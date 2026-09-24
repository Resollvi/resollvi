import type { Metadata } from "next";
import { ToolPageLayout } from "@/components/tools/ToolPageLayout";
import { PorcentagemCalculator } from "@/components/tools/porcentagem/PorcentagemCalculator";

export const metadata: Metadata = {
  title: "Calculadora de porcentagem online grátis",
  description: "Calcule aumentos, descontos e proporções percentuais com resultado instantâneo e gratuito.",
  alternates: { canonical: "https://resollvi.com.br/matematica/porcentagem" },
  openGraph: {
    title: "Calculadora de porcentagem online grátis",
    description: "Calcule porcentagens com resultado instantâneo",
    url: "https://resollvi.com.br/matematica/porcentagem",
    type: "website",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Calculadora de porcentagem",
  applicationCategory: "UtilitiesApplication",
  operatingSystem: "Web",
  offers: { "@type": "Offer", price: "0", priceCurrency: "BRL" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "início", item: "https://resollvi.com.br" },
    { "@type": "ListItem", position: 2, name: "matemática", item: "https://resollvi.com.br/matematica" },
    { "@type": "ListItem", position: 3, name: "porcentagem", item: "https://resollvi.com.br/matematica/porcentagem" },
  ],
};

export default function PorcentagemPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ToolPageLayout
        breadcrumbs={[
          { label: "matemática", href: "/matematica" },
          { label: "porcentagem", href: "/matematica/porcentagem" },
        ]}
        title="Calculadora de porcentagem"
        description="Informe o valor e o percentual para calcular aumentos, descontos e proporções"
        supportTitle="Como funciona o cálculo de porcentagem?"
        supportContent={
          <p>
            Porcentagem é uma fração de base 100 — 15% de um valor significa multiplicar
            esse valor por 15/100. Essa calculadora mostra o valor final com o percentual
            aplicado (útil para descontos e aumentos), a parcela isolada que aquele
            percentual representa, e também o cálculo inverso: dado um valor e um total,
            descubra que porcentagem esse valor representa — útil, por exemplo, pra saber
            qual nota percentual você tirou numa prova (acertos/total de questões).
          </p>
        }
        relatedTools={[
          { href: "/financas/juros-compostos", title: "juros compostos" },
          { href: "/saude/imc", title: "calculadora de IMC" },
        ]}
      >
        <PorcentagemCalculator />
      </ToolPageLayout>
    </>
  );
}
