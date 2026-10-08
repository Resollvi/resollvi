import type { Metadata } from "next";
import { ToolPageLayout, type FaqItem } from "@/components/tools/ToolPageLayout";
import { ImcCalculator } from "@/components/tools/imc/ImcCalculator";
import {
  SupportH3,
  SupportP,
  SupportTable,
} from "@/components/tools/SupportContent";

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

const faq: FaqItem[] = [
  {
    question: "Qual é o IMC ideal?",
    answer: "Para adultos, a faixa de peso normal vai de 18,5 a 24,9.",
  },
  {
    question: "Posso usar a calculadora para crianças?",
    answer:
      "Não. Em crianças e adolescentes, o IMC é interpretado em curvas de crescimento por idade e sexo, não pela tabela de adultos. Procure o pediatra.",
  },
  {
    question: "IMC alto significa que estou doente?",
    answer:
      "Não necessariamente. O IMC é um indicador de triagem, não um diagnóstico. Circunferência abdominal, exames e histórico de saúde também contam.",
  },
  {
    question: "Com que frequência devo calcular?",
    answer:
      "Não há regra fixa. Pequenas variações de peso mudam pouco o resultado, então acompanhe a tendência ao longo de semanas ou meses.",
  },
  {
    question: "Informo a altura em metros ou centímetros?",
    answer: "Em centímetros, por exemplo 175. A calculadora converte para metros sozinha.",
  },
];

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
          <>
            <SupportH3>O que é o IMC e como ele é calculado</SupportH3>
            <SupportP>
              O Índice de Massa Corporal (IMC) resume peso e altura em um único número. A
              fórmula é o peso em quilos dividido pela altura em metros elevada ao quadrado.
              Exemplo: 70 kg e 1,75 m dão 70 ÷ (1,75 × 1,75) = 22,9.
            </SupportP>

            <SupportH3>Faixas de referência para adultos</SupportH3>
            <SupportTable
              caption="Classificação do IMC para adultos"
              headers={["Classificação", "IMC (kg/m²)"]}
              rows={[
                ["Abaixo do peso", "menor que 18,5"],
                ["Peso normal", "18,5 a 24,9"],
                ["Sobrepeso", "25 a 29,9"],
                ["Obesidade", "30 ou mais"],
              ]}
            />
            <SupportP>
              A Organização Mundial da Saúde divide a obesidade em três graus. Esta
              calculadora mostra apenas a faixa geral.
            </SupportP>

            <SupportH3>Qual peso corresponde ao IMC normal na sua altura</SupportH3>
            <SupportTable
              caption="Peso correspondente ao IMC normal por altura"
              headers={["Altura", "Peso com IMC normal"]}
              rows={[
                ["1,60 m", "47,4 a 63,7 kg"],
                ["1,70 m", "53,5 a 72,0 kg"],
                ["1,75 m", "56,7 a 76,3 kg"],
                ["1,80 m", "59,9 a 80,7 kg"],
              ]}
            />
            <SupportP>Valores arredondados, calculados com os limites 18,5 e 24,9.</SupportP>

            <SupportH3>Limites do índice</SupportH3>
            <SupportP>
              O IMC não separa massa muscular de gordura. Atletas e pessoas com muita massa
              muscular podem ter IMC alto sem excesso de gordura.
            </SupportP>
            <SupportP>
              O índice também não se aplica da mesma forma a crianças, adolescentes,
              gestantes e, em alguns protocolos, idosos. Use o resultado como ponto de
              partida e converse com um profissional de saúde para uma avaliação completa.
            </SupportP>
          </>
        }
        faq={faq}
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
