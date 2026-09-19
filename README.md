# Resollvi — portal de ferramentas

Portal de calculadoras e conversores online, com frontend em Next.js e
backend em Spring Boot.

## Estrutura

```
apps/
  web/   -> Next.js (SSR/SSG), UI e páginas de cada ferramenta
  api/   -> Spring Boot, expõe só o endpoint de conversor de moedas
```

As 5 ferramentas do MVP estão implementadas:

- `/saude/imc`
- `/matematica/porcentagem`
- `/financas/juros-compostos`
- `/financas/conversor-de-moedas` (única que chama `apps/api`)
- `/geral/calculadora-de-idade`

Páginas institucionais também implementadas: `/sobre`, `/privacidade`,
`/termos`, `/contato` — **contêm placeholders a preencher antes de
publicar** (e-mail de contato, datas). Ver `CLAUDE.md` para detalhes.

Banner de consentimento de cookies (LGPD) implementado — scripts de
AdSense/Analytics só carregam depois do consentimento aceito.

Veja `apps/web/components/tools/PADRAO.md` para o padrão a seguir ao
criar uma ferramenta nova.

Não há banco de dados no MVP.

## Rodando localmente

Com Docker (recomendado, sobe os dois serviços juntos):

```bash
docker compose up --build
```

- Web: http://localhost:3000
- API: http://localhost:8080

Sem Docker:

```bash
# terminal 1
npm install
npm run dev:web

# terminal 2
cd apps/api
mvn spring-boot:run
```

## Deploy

- `apps/web` → Vercel (Root Directory = `apps/web`)
- `apps/api` → Railway ou Render (Root Directory = `apps/api`)

Cada plataforma faz deploy automático via integração nativa com o
GitHub — não é feito pelo GitHub Actions, que cuida só de lint e
testes (`.github/workflows/ci.yml`).
