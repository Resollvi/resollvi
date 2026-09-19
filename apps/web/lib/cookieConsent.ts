export type ConsentimentoCookies = "aceito" | "recusado";

const CHAVE = "resollvi-consentimento-cookies";

export function lerConsentimento(): ConsentimentoCookies | null {
  if (typeof window === "undefined") return null;
  const valor = window.localStorage.getItem(CHAVE);
  return valor === "aceito" || valor === "recusado" ? valor : null;
}

export function gravarConsentimento(valor: ConsentimentoCookies) {
  window.localStorage.setItem(CHAVE, valor);
}
