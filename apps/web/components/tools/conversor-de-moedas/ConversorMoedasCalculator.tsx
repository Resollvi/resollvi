"use client";

import { useState } from "react";
import { Field, CalculateButton, ResultCard } from "../FormElements";

const MOEDAS = ["USD", "EUR", "BRL", "GBP", "JPY"];

export function ConversorMoedasCalculator() {
  const [valor, setValor] = useState("");
  const [de, setDe] = useState("USD");
  const [para, setPara] = useState("BRL");
  const [resultado, setResultado] = useState<number | null>(null);
  const [erro, setErro] = useState<string | null>(null);
  const [carregando, setCarregando] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const valorNum = Number(valor.replace(",", "."));
    if (!valorNum) return;
    setErro(null);
    setCarregando(true);
    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:8080";
      const res = await fetch(`${apiUrl}/api/conversor-moedas?de=${de}&para=${para}&valor=${valorNum}`);
      if (!res.ok) throw new Error("falha na conversão");
      const data = await res.json();
      setResultado(data.resultado);
    } catch {
      setErro("não foi possível buscar a cotação agora. tente novamente em instantes.");
    } finally {
      setCarregando(false);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div style={{ display: "flex", gap: 12, alignItems: "flex-end" }}>
        <Field id="valor" label="valor" value={valor} onChange={setValor} placeholder="100" />
        <div style={{ flex: 1 }}>
          <label style={{ display: "block", fontSize: 13, color: "var(--text-secondary)", marginBottom: 4 }}>de</label>
          <select value={de} onChange={(e) => setDe(e.target.value)} style={{ width: "100%", height: 40, borderRadius: "var(--radius-sm)", border: "1px solid var(--border)" }}>
            {MOEDAS.map((m) => (<option key={m} value={m}>{m}</option>))}
          </select>
        </div>
        <div style={{ flex: 1 }}>
          <label style={{ display: "block", fontSize: 13, color: "var(--text-secondary)", marginBottom: 4 }}>para</label>
          <select value={para} onChange={(e) => setPara(e.target.value)} style={{ width: "100%", height: 40, borderRadius: "var(--radius-sm)", border: "1px solid var(--border)" }}>
            {MOEDAS.map((m) => (<option key={m} value={m}>{m}</option>))}
          </select>
        </div>
      </div>
      <CalculateButton>{carregando ? "convertendo..." : "converter"}</CalculateButton>
      {erro && <p style={{ color: "var(--result)", fontSize: 13, marginTop: 8 }}>{erro}</p>}
      {resultado !== null && !erro && (
        <ResultCard label={`${valor} ${de} equivale a`} value={resultado.toLocaleString("pt-BR", { maximumFractionDigits: 2 })} helper={para} />
      )}
    </form>
  );
}
