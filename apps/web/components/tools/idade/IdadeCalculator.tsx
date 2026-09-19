"use client";

import { useState } from "react";
import { CalculateButton, ResultCard } from "../FormElements";
import { calcularIdade } from "./calculo";

export function IdadeCalculator() {
  const [nascimento, setNascimento] = useState("");
  const [resultado, setResultado] = useState<string | null>(null);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!nascimento) return;
    const data = new Date(nascimento + "T00:00:00");
    const { anos, meses, dias } = calcularIdade(data);
    setResultado(`${anos} anos, ${meses} meses, ${dias} dias`);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="nascimento" style={{ display: "block", fontSize: 13, color: "var(--text-secondary)", marginBottom: 4 }}>
        data de nascimento
      </label>
      <input
        id="nascimento"
        type="date"
        value={nascimento}
        onChange={(e) => setNascimento(e.target.value)}
        style={{ width: "100%", height: 40, padding: "0 12px", border: "1px solid var(--border)", borderRadius: "var(--radius-sm)", fontSize: 15 }}
      />
      <CalculateButton>calcular</CalculateButton>
      {resultado && <ResultCard label="sua idade" value={resultado} />}
    </form>
  );
}
