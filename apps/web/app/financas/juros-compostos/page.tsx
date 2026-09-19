import type { Metadata } from "next";
import { ToolPageLayout } from "@/components/tools/ToolPageLayout";
import { JurosCompostosCalculator } from "@/components/tools/juros-compostos/JurosCompostosCalculator";

export const metadata: Metadata = {
  title: "Calculadora de juros compostos online grátis",
  description: "Simule o crescimento do seu capital com juros compostos informando valor, taxa e prazo.",
  alternates: { canonical: "https://resollvi.com.br/financas/juros-compostos" },
  openGraph: {
    title: "Calculadora de juros compostos online grátis",
    description: "Simule juros compostos com resultado instantâneo",
    url: "https://resollvi.com.br/financas/juros-compostos",
    type: "website",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Calculadora de juros compostos",
  applicationCategory: "FinanceApplication",
  operatingSystem: "Web",
  offers: { "@type": "Offer", price: "0", priceCurrency: "BRL" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "início", item: "https://resollvi.com.br" },
    { "@type": "ListItem", position: 2, name: "finanças", item: "https://resollvi.com.br/financas" },
    { "@type": "ListItem", position: 3, name: "juros compostos", item: "https://resollvi.com.br/financas/juros-compostos" },
  ],
};

export default function JurosCompostosPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ToolPageLayout
        breadcrumbs={[
          { label: "finanças", href: "/financas" },
          { label: "juros compostos", href: "/financas/juros-compostos" },
        ]}
        title="Juros compostos"
        description="Informe capital, taxa mensal e prazo para simular o crescimento do seu dinheiro"
        supportTitle="Como funcionam os juros compostos?"
        supportContent={
          <p>
            Diferente dos juros simples, nos juros compostos cada período de rendimento
            passa a incidir sobre o capital acumulado até ali, não só sobre o valor
            inicial — por isso o crescimento acelera com o tempo. A fórmula usada aqui é
            M = C × (1 + i)^n, onde C é o capital inicial, i a taxa por período e n o
            número de períodos.
          </p>
        }
        relatedTools={[
          { href: "/matematica/porcentagem", title: "calculadora de porcentagem" },
          { href: "/financas/conversor-de-moedas", title: "conversor de moedas" },
        ]}
      >
        <JurosCompostosCalculator />
      </ToolPageLayout>
    </>
  );
}
