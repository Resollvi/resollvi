import type { Metadata } from "next";
import { ToolPageLayout } from "@/components/tools/ToolPageLayout";
import { ConversorMoedasCalculator } from "@/components/tools/conversor-de-moedas/ConversorMoedasCalculator";

export const metadata: Metadata = {
  title: "Conversor de moedas online grátis",
  description: "Converta valores entre moedas com cotação atualizada, gratuito e instantâneo.",
  alternates: { canonical: "https://resollvi.com.br/financas/conversor-de-moedas" },
  openGraph: {
    title: "Conversor de moedas online grátis",
    description: "Converta moedas com cotação atualizada",
    url: "https://resollvi.com.br/financas/conversor-de-moedas",
    type: "website",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Conversor de moedas",
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
    { "@type": "ListItem", position: 3, name: "conversor de moedas", item: "https://resollvi.com.br/financas/conversor-de-moedas" },
  ],
};

export default function ConversorMoedasPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ToolPageLayout
        breadcrumbs={[
          { label: "finanças", href: "/financas" },
          { label: "conversor de moedas", href: "/financas/conversor-de-moedas" },
        ]}
        title="Conversor de moedas"
        description="Informe o valor e as moedas para converter com cotação atualizada"
        supportTitle="De onde vem a cotação?"
        supportContent={
          <p>
            A cotação é buscada em tempo real numa API de câmbio e mantida em cache por
            alguns minutos no nosso servidor — isso garante um resultado rápido sem
            sobrecarregar o serviço externo com uma chamada a cada conversão feita por
            qualquer visitante do site.
          </p>
        }
        relatedTools={[
          { href: "/financas/juros-compostos", title: "juros compostos" },
          { href: "/matematica/porcentagem", title: "calculadora de porcentagem" },
        ]}
      >
        <ConversorMoedasCalculator />
      </ToolPageLayout>
    </>
  );
}
