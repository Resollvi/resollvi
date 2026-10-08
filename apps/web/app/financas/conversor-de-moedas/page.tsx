import type { Metadata } from "next";
import { ToolPageLayout, type FaqItem } from "@/components/tools/ToolPageLayout";
import { ConversorMoedasCalculator } from "@/components/tools/conversor-de-moedas/ConversorMoedasCalculator";
import { SupportH3, SupportP } from "@/components/tools/SupportContent";

export const metadata: Metadata = {
  title: "Conversor de moedas online grátis",
  description: "Converta valores entre dólar, euro, real, libra e iene com a cotação diária de referência, gratuito e instantâneo.",
  alternates: { canonical: "https://resollvi.com.br/financas/conversor-de-moedas" },
  openGraph: {
    title: "Conversor de moedas online grátis",
    description: "Converta moedas com a cotação diária de referência",
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

const faq: FaqItem[] = [
  {
    question: "A cotação é em tempo real?",
    answer:
      "Não. É uma cotação de referência diária, e a data aparece abaixo de cada resultado.",
  },
  {
    question: "Por que a cotação é diferente da do meu banco ou do Google?",
    answer:
      "Cada fonte usa horário e metodologia próprios, e bancos somam spread e tarifas à cotação de referência.",
  },
  {
    question: "O que aparece nos fins de semana e feriados?",
    answer: "A última cotação disponível, e a data exibida mostra qual foi.",
  },
  {
    question: "Posso converter qualquer valor?",
    answer: "Sim. Informe o número com vírgula ou ponto, por exemplo 1500,50.",
  },
  {
    question: "Esta cotação vale para comprar dólar turismo?",
    answer:
      "Não exatamente. O dólar turismo tem cotação própria, com spread e impostos, que varia entre casas de câmbio.",
  },
];

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
        description="Informe o valor e as moedas para converter com a cotação diária de referência"
        supportTitle="De onde vem a cotação?"
        supportContent={
          <>
            <SupportH3>De onde vem a cotação</SupportH3>
            <SupportP>
              O conversor usa a cotação de referência do dia, obtida de uma API pública de
              câmbio. Cada resultado mostra a data da cotação usada. A taxa é diária e não
              muda minuto a minuto como em plataformas de negociação.
            </SupportP>
            <SupportP>
              Exemplo: em 18/09/2026, 1 dólar valia 5,1359 reais. Nessa cotação, 100 dólares
              equivalem a R$ 513,59.
            </SupportP>

            <SupportH3>Por que o valor difere do que o banco cobra</SupportH3>
            <SupportP>
              Bancos e casas de câmbio aplicam spread (a diferença entre a cotação de
              referência e a que oferecem), tarifas e, em operações internacionais, IOF. Por
              isso o valor efetivamente pago ou recebido costuma ser diferente do mostrado
              aqui.
            </SupportP>
            <SupportP>
              Use o conversor como referência para planejar. Antes de fechar uma operação,
              consulte a cotação final da instituição.
            </SupportP>

            <SupportH3>Moedas disponíveis</SupportH3>
            <SupportP>
              Dólar americano (USD), euro (EUR), real brasileiro (BRL), libra esterlina (GBP)
              e iene japonês (JPY). Você pode converter entre quaisquer duas delas.
            </SupportP>
          </>
        }
        faq={faq}
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
