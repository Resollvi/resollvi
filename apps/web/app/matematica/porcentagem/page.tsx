import type { Metadata } from "next";
import { ToolPageLayout, type FaqItem } from "@/components/tools/ToolPageLayout";
import { PorcentagemCalculator } from "@/components/tools/porcentagem/PorcentagemCalculator";
import {
  SupportH3,
  SupportP,
  SupportList,
  SupportTable,
} from "@/components/tools/SupportContent";

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

const faq: FaqItem[] = [
  {
    question: "Como calcular 10% de cabeça?",
    answer:
      "Divida o valor por 10. Para 20%, dobre o resultado; para 5%, divida-o por 2.",
  },
  {
    question: "Como descobrir o preço antes do desconto?",
    answer:
      "Divida o preço final por 1 menos o desconto em decimal. Quem pagou R$ 170 com 15% de desconto faz 170 ÷ 0,85 e chega a R$ 200.",
  },
  {
    question: "Qual a diferença entre valor do desconto e valor com desconto?",
    answer:
      "O valor do desconto é o que foi abatido (15% de 200 = 30). O valor com desconto é o que sobra para pagar (170).",
  },
  {
    question: "Posso usar vírgula nos números?",
    answer: "Sim, por exemplo 12,5.",
  },
  {
    question: "O percentual pode passar de 100%?",
    answer: "Pode. Um aumento de 100% dobra o valor, e um de 200% o triplica.",
  },
];

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
          <>
            <SupportH3>As quatro contas que a calculadora faz</SupportH3>
            <SupportP>
              Porcentagem é uma fração de base 100: 15% de um valor é o mesmo que
              multiplicá-lo por 15 ÷ 100. A tabela mostra cada conta com um exemplo de
              valor 200 e percentual 15%.
            </SupportP>
            <SupportTable
              caption="Contas de porcentagem com exemplo"
              headers={["Pergunta", "Fórmula", "Resultado"]}
              rows={[
                ["Valor com aumento de 15%", "valor × (1 + 15 ÷ 100)", "230"],
                ["Valor com desconto de 15%", "valor × (1 − 15 ÷ 100)", "170"],
                ["15% de 200", "valor × 15 ÷ 100", "30"],
                ["30 é quanto por cento de 200?", "parte ÷ total × 100", "15%"],
              ]}
            />

            <SupportH3>Erros comuns</SupportH3>
            <SupportList
              items={[
                <>
                  <strong>Aumentar e depois diminuir o mesmo percentual não devolve o valor
                  original.</strong> R$ 100 com 20% a mais viram R$ 120; com 20% a menos sobre
                  R$ 120, ficam R$ 96.
                </>,
                <>
                  <strong>Descontos seguidos não se somam.</strong> Dois descontos de 10% em
                  sequência equivalem a 19% (100 → 90 → 81), não a 20%.
                </>,
                <>
                  <strong>Pontos percentuais não são porcentagem.</strong> Se uma taxa sobe de
                  10% para 12%, a alta é de 2 pontos percentuais, ou 20% em termos relativos.
                </>,
              ]}
            />

            <SupportH3>Usos do dia a dia</SupportH3>
            <SupportList
              items={[
                "Desconto em loja: um produto de R$ 250 com 30% de desconto sai por R$ 175.",
                "Nota em prova: 18 acertos em 25 questões equivalem a 72%.",
                "Comissão ou gorjeta: 10% de R$ 80 são R$ 8.",
              ]}
            />
          </>
        }
        faq={faq}
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
