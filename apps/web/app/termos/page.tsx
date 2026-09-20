import type { Metadata } from "next";
import { InstitutionalPage } from "@/components/InstitutionalPage";

export const metadata: Metadata = {
  title: "Termos de Uso",
  description: "Regras de uso das ferramentas e conteúdo do Resollvi.",
  alternates: { canonical: "https://resollvi.com.br/termos" },
};

export default function TermosPage() {
  return (
    <InstitutionalPage title="Termos de Uso" updatedAt="19/09/2026">
      <p>
        Ao usar o Resollvi, você concorda com os termos abaixo. Se não concordar, pedimos
        que não utilize o site.
      </p>

      <h2 style={{ fontSize: 16, color: "var(--text-primary)", marginTop: 24 }}>
        Sobre os cálculos
      </h2>
      <p>
        As calculadoras e conversores do Resollvi têm caráter informativo e educacional.
        Fazemos o possível para manter as fórmulas e fontes de dados corretas e
        atualizadas, mas não garantimos que os resultados sejam adequados para decisões
        médicas, financeiras, jurídicas ou de qualquer natureza que exijam precisão
        profissional. Recomendamos validar resultados importantes com um profissional
        qualificado antes de tomar decisões com base neles.
      </p>

      <h2 style={{ fontSize: 16, color: "var(--text-primary)", marginTop: 24 }}>
        Uso aceitável
      </h2>
      <p>
        O conteúdo do site não pode ser copiado, redistribuído ou usado para treinar
        outros produtos sem autorização prévia. É proibido tentar interferir no
        funcionamento do site (ex: sobrecarregar nossos servidores com requisições
        automatizadas).
      </p>

      <h2 style={{ fontSize: 16, color: "var(--text-primary)", marginTop: 24 }}>
        Propriedade intelectual
      </h2>
      <p>
        Textos, layout e marca do Resollvi pertencem aos seus responsáveis. O uso do site
        não transfere nenhum direito de propriedade intelectual ao usuário.
      </p>

      <h2 style={{ fontSize: 16, color: "var(--text-primary)", marginTop: 24 }}>
        Alterações destes termos
      </h2>
      <p>
        Estes termos podem ser atualizados periodicamente. A data no topo desta página
        indica a versão mais recente.
      </p>

      <h2 style={{ fontSize: 16, color: "var(--text-primary)", marginTop: 24 }}>
        Contato
      </h2>
      <p>Dúvidas sobre estes termos podem ser enviadas para contato@resollvi.com.br.</p>
    </InstitutionalPage>
  );
}
