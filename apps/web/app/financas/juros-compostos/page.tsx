import type { Metadata } from "next";
import { ToolPageLayout, type FaqItem } from "@/components/tools/ToolPageLayout";
import { JurosCompostosCalculator } from "@/components/tools/juros-compostos/JurosCompostosCalculator";
import {
  SupportH3,
  SupportP,
  SupportTable,
} from "@/components/tools/SupportContent";

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

const faq: FaqItem[] = [
  {
    question: "Qual a diferença entre juros simples e compostos?",
    answer:
      "Nos simples, os juros incidem sempre sobre o capital inicial. Nos compostos, incidem sobre o capital mais os juros já acumulados.",
  },
  {
    question: "O aporte é feito no começo ou no fim do mês?",
    answer:
      "No fim, depois dos juros do mês. Aportes no começo do mês rendem um pouco mais, e esse caso não está incluído.",
  },
  {
    question: "Posso simular uma dívida?",
    answer:
      "Sim. Informe o valor devido como capital, a taxa cobrada ao mês e deixe o aporte vazio para ver quanto a dívida cresce.",
  },
  {
    question: "Posso digitar a taxa anual?",
    answer:
      "Não diretamente. Converta para taxa mensal com a fórmula (1 + taxa anual)^(1/12) − 1 e informe o resultado.",
  },
  {
    question: "O resultado inclui imposto de renda?",
    answer: "Não. Os valores são brutos, antes de qualquer imposto ou taxa.",
  },
];

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
          <>
            <SupportH3>Como funcionam os juros compostos</SupportH3>
            <SupportP>
              Nos juros compostos, o rendimento de cada mês passa a render junto com o
              capital, o famoso juros sobre juros. Sem aportes, a fórmula é M = C × (1 + i)^n,
              em que C é o capital inicial, i a taxa mensal em decimal e n o número de meses.
            </SupportP>
            <SupportP>
              Exemplo: R$ 1.000 a 1% ao mês por 12 meses viram R$ 1.126,83. Com juros
              simples, o mesmo prazo renderia R$ 1.120,00. A diferença cresce a cada mês.
            </SupportP>

            <SupportH3>Com aporte mensal</SupportH3>
            <SupportP>
              A calculadora soma o aporte ao saldo no fim de cada mês, depois de aplicar os
              juros daquele mês. Exemplo: capital de R$ 1.000, aporte de R$ 100 por mês, 1%
              ao mês, 12 meses.
            </SupportP>
            <SupportTable
              caption="Exemplo de simulação com aporte mensal"
              headers={["Item", "Valor"]}
              rows={[
                ["Total investido (capital + aportes)", "R$ 2.200,00"],
                ["Juros ganhos", "R$ 195,08"],
                ["Montante final", "R$ 2.395,08"],
              ]}
            />
            <SupportP>
              A tabela mês a mês abaixo do resultado mostra saldo inicial, juros, aporte e
              saldo final de cada período.
            </SupportP>

            <SupportH3>Taxa mensal e taxa anual</SupportH3>
            <SupportP>
              A calculadora pede a taxa mensal. Para converter uma taxa anual, use
              (1 + taxa anual)^(1/12) − 1. Uma taxa de 12% ao ano equivale a cerca de 0,95%
              ao mês.
            </SupportP>
            <SupportP>
              O caminho inverso também não é uma simples multiplicação por 12: 1% ao mês
              corresponde a 12,68% ao ano, não a 12%.
            </SupportP>

            <SupportH3>O que a simulação não considera</SupportH3>
            <SupportP>
              O resultado não desconta imposto de renda, inflação, taxas de administração ou
              corretagem, e supõe a mesma taxa durante todo o período. É uma projeção para
              estudo, não garantia de rendimento nem recomendação de investimento.
            </SupportP>
            <SupportP>
              A mesma conta serve para entender dívidas: cartão de crédito e cheque especial
              também cobram juros compostos.
            </SupportP>
          </>
        }
        faq={faq}
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
