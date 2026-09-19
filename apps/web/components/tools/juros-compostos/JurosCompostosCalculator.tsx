"use client";

import { useState } from "react";
import { Field, CalculateButton, ResultCard } from "../FormElements";
import { calcularJurosCompostos } from "./calculo";

export function JurosCompostosCalculator() {
  const [capital, setCapital] = useState("");
  const [taxa, setTaxa] = useState("");
  const [meses, setMeses] = useState("");
  const [resultado, setResultado] = useState<number | null>(null);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const capitalNum = Number(capital.replace(",", "."));
    const taxaNum = Number(taxa.replace(",", "."));
    const mesesNum = Number(meses);
    if (!capitalNum || !taxaNum || !mesesNum) return;
    setResultado(calcularJurosCompostos(capitalNum, taxaNum, mesesNum));
  }

  return (
    <form onSubmit={handleSubmit}>
      <div style={{ display: "flex", gap: 12 }}>
        <Field id="capital" label="capital (R$)" value={capital} onChange={setCapital} placeholder="1000" />
        <Field id="taxa" label="taxa % a.m." value={taxa} onChange={setTaxa} placeholder="1" />
        <Field id="meses" label="meses" value={meses} onChange={setMeses} placeholder="12" inputMode="numeric" />
      </div>
      <CalculateButton>calcular</CalculateButton>
      {resultado !== null && (
        <ResultCard
          label="montante final"
          value={resultado.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
        />
      )}
    </form>
  );
}
