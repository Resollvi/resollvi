import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://resollvi.com.br";
  const ferramentas = [
    "/saude/imc",
    "/matematica/porcentagem",
    "/financas/juros-compostos",
    "/financas/conversor-de-moedas",
    "/geral/calculadora-de-idade",
  ];
  const institucionais = ["/sobre", "/privacidade", "/termos", "/contato"];

  return [
    { url: base, priority: 1.0 },
    ...ferramentas.map((path) => ({ url: `${base}${path}`, priority: 0.8 })),
    ...institucionais.map((path) => ({ url: `${base}${path}`, priority: 0.3 })),
  ];
}
