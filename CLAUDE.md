# Contexto do projeto — Resollvi

Este arquivo documenta as decisões já tomadas para este projeto, para que
qualquer sessão do Claude Code tenha o contexto completo sem precisar
reexplicar tudo. Trate como fonte da verdade — atualize conforme novas
decisões forem tomadas.

## Visão geral

Portal de ferramentas online (calculadoras e conversores) com foco em SEO,
performance e monetização via Google AdSense. Nome definido: **Resollvi**
(domínio `resollvi.com.br`).

## Stack

- **Frontend:** Next.js (App Router, SSR/SSG).
- **Backend:** Java + Spring Boot + Maven + REST API. Usado **apenas** para
  o conversor de moedas.
- **Banco de dados:** nenhum no MVP.
- **Cache:** Caffeine (TTL 15min) para a cotação de câmbio.
- **Monorepo:** repositório único (`apps/web`, `apps/api`).

## Escopo do MVP — 5 ferramentas (todas implementadas)

| Ferramenta | URL | Onde roda |
|---|---|---|
| Calculadora de IMC | `/saude/imc` | Client-side |
| Calculadora de porcentagem | `/matematica/porcentagem` | Client-side |
| Calculadora de juros compostos | `/financas/juros-compostos` | Client-side |
| Conversor de moedas | `/financas/conversor-de-moedas` | Backend (Spring Boot + cache) |
| Calculadora de idade | `/geral/calculadora-de-idade` | Client-side |

Padrão de implementação documentado em
`apps/web/components/tools/PADRAO.md` — seguir para qualquer ferramenta
nova.

## Páginas institucionais (implementadas e preenchidas)

- `/sobre`, `/privacidade`, `/termos`, `/contato` — em
  `apps/web/app/<pagina>/page.tsx`, usando o componente
  `InstitutionalPage`.
- E-mail de contato definido: `contato@resollvi.com.br` (Gmail dedicado ao
  projeto para o MVP — migrar para e-mail no domínio próprio, ex. via
  redirecionamento gratuito do Cloudflare, quando possível).
- Data de "última atualização" preenchida com a data de publicação
  inicial (19/09/2026) — atualizar manualmente a cada revisão real do
  conteúdo.
- Texto de "Quem mantém o Resollvi" escrito em tom genérico de equipe,
  sem expor identidade pessoal.
- Pendência menor não bloqueante: a frase sobre frequência de revisão de
  conteúdo em `/sobre` ainda tem um placeholder — preencher quando
  houver um processo real de revisão definido.
- O texto de Política de Privacidade e Termos foi escrito como modelo de
  boa prática, não como aconselhamento jurídico — vale revisão de um
  advogado antes de publicar, especialmente a parte de LGPD.

## CORS do backend (configurável por ambiente)

- `ConversorMoedasController` lê a origem permitida de
  `app.cors.allowed-origin` (Spring), que por sua vez lê a variável de
  ambiente `CORS_ALLOWED_ORIGIN` (padrão `http://localhost:3000` em
  dev). Nunca hardcodar `*` nem o domínio direto no código — configurar
  via variável de ambiente em cada plataforma de deploy.

## Cookie consent (implementado)

- `components/CookieConsent.tsx` — banner que grava a escolha em
  localStorage (`lib/cookieConsent.ts`).
- `components/ConsentedScripts.tsx` — só injeta os scripts do AdSense e
  do Google Analytics **depois** do consentimento aceito, lendo os IDs de
  `NEXT_PUBLIC_ADSENSE_CLIENT_ID` e `NEXT_PUBLIC_GA_MEASUREMENT_ID` (ver
  `.env.example`). Enquanto essas variáveis não forem preenchidas, nenhum
  script é carregado mesmo com consentimento aceito.

## Estrutura de página de ferramenta (padrão a repetir)

1. Breadcrumb
2. Calculadora acima da dobra
3. Bloco de anúncio logo abaixo do resultado (`min-height` reservado)
4. Conteúdo de apoio (E-E-A-T)
5. Ferramentas relacionadas

## Checklist de SEO técnico (já aplicado nas 5 ferramentas)

- Meta tags únicas, Open Graph, schema.org `WebApplication` +
  `BreadcrumbList`, `sitemap.ts`, `robots.ts`, `next/image` quando houver
  imagem, URL em `/categoria/ferramenta`.

## Monetização

- Google AdSense é a base. 1 bloco de anúncio por página no MVP.
- Afiliados, conteúdo patrocinado, premium e assinaturas ficam como
  backlog pós-tração.
- **Atenção:** o plano gratuito (Hobby) da Vercel proíbe uso comercial,
  incluindo AdSense. Necessário plano Pro (US$ 20/mês) ao ativar o
  AdSense.

## Infraestrutura

- **CI:** GitHub Actions roda lint + testes em `apps/web` e `apps/api`.
  Não faz deploy.
- **Deploy:** integrações nativas de Git de cada plataforma.
  - `apps/web` → Vercel (Root Directory = `apps/web`)
  - `apps/api` → **Railway** (decidido — evita cold start do tier
    gratuito do Render, que é incompatível com "resultado instantâneo";
    Root Directory = `apps/api`)
- **Variáveis de ambiente em produção:**
  - Vercel: `NEXT_PUBLIC_API_URL` = URL pública gerada pelo Railway
  - Railway: `CORS_ALLOWED_ORIGIN` = `https://resollvi.com.br`
- **Testes:** prioridade em testes unitários da lógica de cálculo
  (`calculo.ts` de cada ferramenta).
- **Observabilidade:** logs estruturados, health check via Spring
  Actuator, analytics de produto.

## Domínio

Registrado: **resollvi.com.br**.

## Próximos passos pendentes (nesta ordem)

1. Preencher os placeholders das páginas institucionais (e-mail, data,
   apresentação) e revisar com um advogado.
2. Subir o repositório para o GitHub.
3. Conectar Vercel (`apps/web`) e Railway/Render (`apps/api`).
4. Apontar o DNS de `resollvi.com.br` para a Vercel.
5. Deixar o site indexar por algumas semanas antes de submeter ao
   AdSense.
6. Preencher `NEXT_PUBLIC_ADSENSE_CLIENT_ID` só depois da aprovação.

## Decisões explicitamente adiadas (não fazer sem revisão)

- Ferramentas trabalhistas/fiscais (salário líquido, rescisão, IRPF) —
  fase 2, não MVP.
- Qualquer entidade de banco de dados — só quando conta de
  usuário/premium entrar em escopo de fato.
- Redis, APM, testes E2E completos — over-engineering para o estágio
  atual.
