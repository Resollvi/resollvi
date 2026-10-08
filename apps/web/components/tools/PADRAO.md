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
     `supportContent` explicando a fórmula/metodologia (**400-500
     palavras**), 2-3 `relatedTools` e a prop `faq` (4-5 perguntas)

4. **Registrar a URL** em `app/sitemap.ts`.

## Conteúdo de apoio (`supportContent` + `faq`)

Use os blocos de `components/tools/SupportContent.tsx` (`SupportH3`,
`SupportP`, `SupportList`, `SupportTable`) para manter o visual
consistente. Estrutura esperada, nesta ordem:

1. Como o cálculo funciona, com a fórmula e **um exemplo numérico**
   conferido (rode a conta antes de publicar).
2. Uma tabela de referência ou casos de uso do dia a dia.
3. **Limites da ferramenta**: o que ela não considera (impostos,
   inflação, spread, etc.) e quando procurar um profissional.
4. `faq`: 4-5 perguntas reais de quem busca a ferramenta. O
   `ToolPageLayout` mostra a lista na página e gera o JSON-LD
   `FAQPage` automaticamente — não crie esse script na página.

Cada afirmação factual do texto (faixas, taxas, regras) deve ser
verificada em fonte oficial. Não afirme comportamento que a ferramenta
não tem (ex.: "tempo real" quando a cotação é diária).

Não pule o passo 1 mesmo para cálculos simples — é o que permite testar
a fórmula isoladamente da interface.
