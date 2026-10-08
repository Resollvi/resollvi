import type { Metadata } from "next";
import { ToolPageLayout, type FaqItem } from "@/components/tools/ToolPageLayout";
import { IdadeCalculator } from "@/components/tools/idade/IdadeCalculator";
import { SupportH3, SupportP, SupportList } from "@/components/tools/SupportContent";

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

const faq: FaqItem[] = [
  {
    question: "Como calcular a idade manualmente?",
    answer:
      "Subtraia o ano de nascimento do ano de referência. Se o aniversário ainda não ocorreu naquele ano, subtraia mais 1.",
  },
  {
    question: "Posso saber minha idade em uma data futura?",
    answer: "Sim. Troque o campo “calcular idade em” pela data desejada.",
  },
  {
    question: "Posso usar o resultado em documentos oficiais?",
    answer:
      "Use como referência. Para fins oficiais, vale a regra do órgão ou do edital, que pode definir a data e a forma de contagem.",
  },
  {
    question: "Os dias até o aniversário também mudam com a data de referência?",
    answer: "Não. Essa contagem usa sempre a data de hoje.",
  },
];

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
          <>
            <SupportH3>Como a idade é calculada</SupportH3>
            <SupportP>
              A calculadora compara a data de nascimento com uma data de referência, que por
              padrão é hoje. Primeiro conta os anos completos, depois os meses e os dias
              restantes, usando o número real de dias de cada mês, inclusive em anos
              bissextos.
            </SupportP>
            <SupportP>
              Exemplo: quem nasceu em 15/06/2000 tem, em 19/09/2026, 26 anos, 3 meses e 4
              dias.
            </SupportP>

            <SupportH3>Quando usar a data de referência</SupportH3>
            <SupportP>
              O campo “calcular idade em” aceita qualquer data, passada ou futura. Ele é útil
              em situações como estas:
            </SupportP>
            <SupportList
              items={[
                <>
                  <strong>Concursos:</strong> o edital costuma definir uma data (inscrição,
                  posse ou outra) para os limites de idade. Informe essa data para conferir
                  se você se enquadra.
                </>,
                <>
                  <strong>Matrícula escolar:</strong> redes de ensino costumam definir uma data
                  de corte para a idade mínima de cada série. Confira a regra da sua rede ou
                  escola e informe essa data.
                </>,
                <>
                  <strong>Planejamento:</strong> teste datas futuras para saber a idade exata
                  em marcos como 18, 60 ou 65 anos.
                </>,
                <>
                  <strong>Registros passados:</strong> descubra a idade que alguém tinha em uma
                  data específica.
                </>,
              ]}
            />

            <SupportH3>Dias até o próximo aniversário</SupportH3>
            <SupportP>
              A contagem é sempre feita a partir de hoje. Se o aniversário for hoje, a
              calculadora avisa.
            </SupportP>

            <SupportH3>Privacidade</SupportH3>
            <SupportP>
              O cálculo acontece no seu navegador. A data de nascimento não é enviada nem
              guardada em nossos servidores.
            </SupportP>
          </>
        }
        faq={faq}
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
