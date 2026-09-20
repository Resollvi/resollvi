import type { Metadata } from "next";
import { InstitutionalPage } from "@/components/InstitutionalPage";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description: "Como o Resollvi coleta, usa e protege seus dados.",
  alternates: { canonical: "https://resollvi.com.br/privacidade" },
};

export default function PrivacidadePage() {
  return (
    <InstitutionalPage title="Política de Privacidade" updatedAt="19/09/2026">
      <p>
        Esta política explica quais dados o Resollvi coleta, para que servem e como você
        pode exercer seus direitos, em conformidade com a Lei Geral de Proteção de Dados
        (LGPD — Lei nº 13.709/2018).
      </p>

      <h2 style={{ fontSize: 16, color: "var(--text-primary)", marginTop: 24 }}>
        Quais dados coletamos
      </h2>
      <p>
        As calculadoras do Resollvi não armazenam os valores que você digita — os
        cálculos acontecem no seu próprio navegador e não são enviados para nossos
        servidores, exceto pelo conversor de moedas, que envia apenas o par de moedas e
        o valor informado para obter a cotação (nenhum dado pessoal é enviado nessa
        chamada).
      </p>
      <p>
        Coletamos dados de navegação de forma agregada e anônima por meio de ferramenta
        de análise de audiência (ex: Google Analytics), como páginas visitadas e tempo de
        permanência, para entender quais ferramentas são mais úteis aos visitantes.
      </p>

      <h2 style={{ fontSize: 16, color: "var(--text-primary)", marginTop: 24 }}>
        Cookies e publicidade
      </h2>
      <p>
        Utilizamos o Google AdSense para exibir anúncios. O Google e seus parceiros podem
        usar cookies para personalizar os anúncios exibidos com base em visitas
        anteriores a este ou a outros sites. Você pode gerenciar suas preferências de
        anúncios personalizados diretamente nas{" "}
        <a href="https://adssettings.google.com" style={{ color: "var(--brand)" }}>
          configurações de anúncios do Google
        </a>
        . Ao aceitar os cookies no banner exibido em nosso site, você concorda com esse
        uso; você também pode recusar cookies não essenciais a qualquer momento.
      </p>

      <h2 style={{ fontSize: 16, color: "var(--text-primary)", marginTop: 24 }}>
        Seus direitos
      </h2>
      <p>
        Conforme a LGPD, você pode solicitar a qualquer momento a confirmação da
        existência de tratamento, acesso, correção ou eliminação dos seus dados. Para
        exercer esses direitos, entre em contato pelo e-mail contato@resollvi.com.br.
      </p>

      <h2 style={{ fontSize: 16, color: "var(--text-primary)", marginTop: 24 }}>
        Contato
      </h2>
      <p>
        Dúvidas sobre esta política podem ser enviadas para contato@resollvi.com.br.
      </p>
    </InstitutionalPage>
  );
}
