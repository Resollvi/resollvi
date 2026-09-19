"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { lerConsentimento, gravarConsentimento, type ConsentimentoCookies } from "@/lib/cookieConsent";

export function CookieConsent() {
  const [escolha, setEscolha] = useState<ConsentimentoCookies | null | "carregando">("carregando");

  useEffect(() => {
    setEscolha(lerConsentimento());
  }, []);

  function escolher(valor: ConsentimentoCookies) {
    gravarConsentimento(valor);
    setEscolha(valor);
  }

  if (escolha !== null) return null; // já decidido (ou ainda carregando) — não mostra nada

  return (
    <div
      role="dialog"
      aria-label="Consentimento de cookies"
      style={{
        position: "fixed",
        bottom: 16,
        left: 16,
        right: 16,
        maxWidth: 480,
        margin: "0 auto",
        background: "var(--surface)",
        border: "1px solid var(--border)",
        borderRadius: "var(--radius-md)",
        padding: 16,
        boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
        zIndex: 50,
      }}
    >
      <p style={{ fontSize: 13, color: "var(--text-secondary)", margin: "0 0 12px" }}>
        Usamos cookies para melhorar sua experiência e exibir anúncios. Veja nossa{" "}
        <Link href="/privacidade" style={{ color: "var(--brand)" }}>
          Política de Privacidade
        </Link>
        .
      </p>
      <div style={{ display: "flex", gap: 8 }}>
        <button
          onClick={() => escolher("recusado")}
          style={{
            flex: 1,
            height: 36,
            border: "1px solid var(--border)",
            borderRadius: "var(--radius-sm)",
            background: "transparent",
            fontSize: 13,
          }}
        >
          Recusar não essenciais
        </button>
        <button
          onClick={() => escolher("aceito")}
          style={{
            flex: 1,
            height: 36,
            border: "none",
            borderRadius: "var(--radius-sm)",
            background: "var(--brand)",
            color: "#fff",
            fontSize: 13,
            fontWeight: 600,
          }}
        >
          Aceitar todos
        </button>
      </div>
    </div>
  );
}
