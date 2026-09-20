import type { Metadata } from "next";
import { InstitutionalPage } from "@/components/InstitutionalPage";

export const metadata: Metadata = {
  title: "Contato",
  description: "Fale com o Resollvi — dúvidas, sugestões ou erro em algum cálculo.",
  alternates: { canonical: "https://resollvi.com.br/contato" },
};

const EMAIL_CONTATO = "contato@resollvi.com.br";

export default function ContatoPage() {
  return (
    <InstitutionalPage title="Contato" updatedAt="19/09/2026">
      <p>
        Encontrou um erro em algum cálculo, tem uma sugestão de ferramenta nova ou
        qualquer outra dúvida? Escreva para{" "}
        <a href={`mailto:${EMAIL_CONTATO}`} style={{ color: "var(--brand)" }}>
          {EMAIL_CONTATO}
        </a>
        .
      </p>
      <p>Respondemos o mais rápido possível.</p>
    </InstitutionalPage>
  );
}
