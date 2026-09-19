"use client";

import { useState } from "react";
import { Field, CalculateButton, ResultCard } from "../FormElements";
import { calcularImc, classificarImc } from "./calculo";

export function ImcCalculator() {
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");
  const [resultado, setResultado] = useState<{ imc: number; faixa: string } | null>(null);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const pesoNum = Number(peso.replace(",", "."));
    const alturaNum = Number(altura.replace(",", "."));
    if (!pesoNum || !alturaNum) return;
    const imc = calcularImc(pesoNum, alturaNum);
    setResultado({ imc, faixa: classificarImc(imc) });
  }

  return (
    <form onSubmit={handleSubmit}>
      <div style={{ display: "flex", gap: 12 }}>
        <Field id="peso" label="peso (kg)" value={peso} onChange={setPeso} placeholder="70" />
        <Field id="altura" label="altura (cm)" value={altura} onChange={setAltura} placeholder="175" />
      </div>
      <CalculateButton>calcular</CalculateButton>
      {resultado && (
        <ResultCard label="seu IMC" value={resultado.imc.toFixed(1)} helper={resultado.faixa} />
      )}
    </form>
  );
}
