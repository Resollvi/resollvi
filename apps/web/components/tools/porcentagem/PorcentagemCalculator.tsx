"use client";

import { useState } from "react";
import { Field, CalculateButton, ResultCard } from "../FormElements";
import { calcularAumento, calcularDesconto, calcularProporcao } from "./calculo";

type Resultado = {
  aumento: number;
  desconto: number;
  proporcao: number;
};

export function PorcentagemCalculator() {
  const [valor, setValor] = useState("");
  const [percentual, setPercentual] = useState("");
  const [resultado, setResultado] = useState<Resultado | null>(null);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const valorNum = Number(valor.replace(",", "."));
    const percentualNum = Number(percentual.replace(",", "."));

    if (!valorNum || !percentualNum) return;

    setResultado({
      aumento: calcularAumento(valorNum, percentualNum),
      desconto: calcularDesconto(valorNum, percentualNum),
      proporcao: calcularProporcao(valorNum, percentualNum),
    });
  }

  const formatar = (n: number) =>
    n.toLocaleString("pt-BR", { maximumFractionDigits: 2 });

  return (
    <form onSubmit={handleSubmit}>
      <div style={{ display: "flex", gap: 12 }}>
        <Field id="valor" label="valor" value={valor} onChange={setValor} placeholder="200" />
        <Field
          id="percentual"
          label="percentual (%)"
          value={percentual}
          onChange={setPercentual}
          placeholder="15"
        />
      </div>
      <CalculateButton>calcular</CalculateButton>

      {resultado && (
        <div style={{ display: "grid", gap: 12, marginTop: 20 }}>
          <ResultCard
            label={`com aumento de ${percentual}%`}
            value={formatar(resultado.aumento)}
          />
          <ResultCard
            label={`com desconto de ${percentual}%`}
            value={formatar(resultado.desconto)}
          />
          <ResultCard
            label={`${percentual}% de ${valor} equivale a`}
            value={formatar(resultado.proporcao)}
          />
        </div>
      )}
    </form>
  );
}
