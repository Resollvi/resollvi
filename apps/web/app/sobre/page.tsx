import type { Metadata } from "next";
import { InstitutionalPage } from "@/components/InstitutionalPage";

export const metadata: Metadata = {
  title: "Sobre",
  description: "Conheça o Resollvi e a metodologia por trás das nossas calculadoras.",
  alternates: { canonical: "https://resollvi.com.br/sobre" },
};

export default function SobrePage() {
  return (
    <InstitutionalPage title="Sobre o Resollvi" updatedAt="19/09/2026">
      <p>
        O Resollvi é um portal de calculadoras e conversores gratuitos, criado para
        resolver contas do dia a dia com resultado instantâneo, sem cadastro e sem
        complicação.
      </p>

      <h2 style={{ fontSize: 16, color: "var(--text-primary)", marginTop: 24 }}>
        Nossa metodologia
      </h2>
      <p>
        Cada ferramenta é construída a partir de fórmulas e referências reconhecidas —
        por exemplo, a calculadora de IMC segue a metodologia da Organização Mundial da
        Saúde. Sempre que uma ferramenta depender de dado externo (como cotação de
        moedas), a fonte é uma API pública de câmbio, atualizada periodicamente.
      </p>

      <h2 style={{ fontSize: 16, color: "var(--text-primary)", marginTop: 24 }}>
        Atualização de conteúdo
      </h2>
      <p>
        Revisamos as ferramentas e o conteúdo de apoio periodicamente para manter a
        precisão dos cálculos e das explicações. [Descrever aqui a frequência real de
        revisão quando o processo estiver definido.]
      </p>

      <h2 style={{ fontSize: 16, color: "var(--text-primary)", marginTop: 24 }}>
        Quem mantém o Resollvi
      </h2>
      <p>
        O Resollvi é mantido por uma pequena equipe dedicada a construir ferramentas
        simples e confiáveis para o dia a dia das pessoas. Nosso trabalho é cuidar de
        cada calculadora com atenção — da fórmula usada até a clareza do resultado — e
        adicionar novas ferramentas continuamente, sempre com base no que os visitantes
        realmente precisam. Se algo não estiver claro ou parecer errado, queremos saber:
        veja como falar com a gente na página de{" "}
        <a href="/contato" style={{ color: "var(--brand)" }}>
          Contato
        </a>
        .
      </p>
    </InstitutionalPage>
  );
}
