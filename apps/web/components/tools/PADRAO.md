# Padrão de página de ferramenta

A página `/saude/imc` (`app/saude/imc/page.tsx`) é o modelo de referência.
Para criar uma nova ferramenta, replique esta estrutura:

1. **Lógica de cálculo isolada**: crie
   `components/tools/<ferramenta>/calculo.ts` com funções puras (sem
   React, sem UI) — facilita testar com Vitest sem precisar renderizar
   componente.

2. **Componente cliente**: crie
   `components/tools/<ferramenta>/<Ferramenta>Calculator.tsx` com
   `"use client"`, usando `Field`, `CalculateButton` e `ResultCard` de
   `components/tools/FormElements.tsx` — não recrie inputs/botões do
   zero, para manter a mesma cara em todas as ferramentas.

3. **Página**: crie `app/<categoria>/<ferramenta>/page.tsx` com:
   - `metadata` (title, description, canonical, openGraph) — únicos
     para a página, nunca copiados literalmente de outra ferramenta
   - JSON-LD `WebApplication` + `BreadcrumbList`
   - `ToolPageLayout` envolvendo o componente calculador, com
     `supportContent` explicando a fórmula/metodologia (mínimo
     150-200 palavras) e 2-3 `relatedTools`

4. **Registrar a URL** em `app/sitemap.ts`.

Não pule o passo 1 mesmo para cálculos simples — é o que permite testar
a fórmula isoladamente da interface.
