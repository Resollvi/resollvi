"use client";

import { useState } from "react";
import { Field, CalculateButton, ResultCard } from "../FormElements";
import {
  calcularAumento,
  calcularDesconto,
  calcularProporcao,
  calcularPercentualRelativo,
} from "./calculo";

type Resultado = {
  aumento: number;
  desconto: number;
  proporcao: number;
};

export function PorcentagemCalculator() {
  const [valor, setValor] = useState("");
  const [percentual, setPercentual] = useState("");
  const [resultado, setResultado] = useState<Resultado | null>(null);

  const [parte, setParte] = useState("");
  const [total, setTotal] = useState("");
  const [percentualRelativo, setPercentualRelativo] = useState<number | null>(null);

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

  function handleSubmitInverso(e: React.FormEvent) {
    e.preventDefault();
    const parteNum = Number(parte.replace(",", "."));
    const totalNum = Number(total.replace(",", "."));

    if (!parteNum || !totalNum) return;

    setPercentualRelativo(calcularPercentualRelativo(parteNum, totalNum));
  }

  const formatar = (n: number) =>
    n.toLocaleString("pt-BR", { maximumFractionDigits: 2 });

  return (
    <>
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

      <div style={{ borderTop: "1px solid var(--border)", marginTop: 28, paddingTop: 20 }}>
        <p style={{ fontSize: 14, fontWeight: 600, margin: "0 0 4px" }}>
          Quanto um valor representa do total?
        </p>
        <p style={{ fontSize: 13, color: "var(--text-secondary)", margin: "0 0 12px" }}>
          descubra que porcentagem uma parte representa em relação ao total
        </p>
        <form onSubmit={handleSubmitInverso}>
          <div style={{ display: "flex", gap: 12 }}>
            <Field id="parte" label="parte" value={parte} onChange={setParte} placeholder="30" />
            <Field id="total" label="total" value={total} onChange={setTotal} placeholder="200" />
          </div>
          <CalculateButton>calcular porcentagem</CalculateButton>

          {percentualRelativo !== null && (
            <div style={{ marginTop: 20 }}>
              <ResultCard
                label={`${parte} é qual porcentagem de ${total}`}
                value={`${formatar(percentualRelativo)}%`}
              />
            </div>
          )}
        </form>
      </div>
    </>
  );
}
