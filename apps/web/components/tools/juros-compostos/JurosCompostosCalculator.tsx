"use client";

import { useState } from "react";
import { Field, CalculateButton, ResultCard } from "../FormElements";
import { calcularJurosCompostos, calcularEvolucaoMensal, type LinhaEvolucao } from "./calculo";

export function JurosCompostosCalculator() {
  const [capital, setCapital] = useState("");
  const [taxa, setTaxa] = useState("");
  const [meses, setMeses] = useState("");
  const [aporte, setAporte] = useState("");
  const [resultado, setResultado] = useState<number | null>(null);
  const [evolucao, setEvolucao] = useState<LinhaEvolucao[]>([]);
  const [mostrarTabela, setMostrarTabela] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const capitalNum = Number(capital.replace(",", "."));
    const taxaNum = Number(taxa.replace(",", "."));
    const mesesNum = Number(meses);
    const aporteNum = aporte ? Number(aporte.replace(",", ".")) : 0;

    if (!capitalNum || !taxaNum || !mesesNum) return;

    setResultado(calcularJurosCompostos(capitalNum, taxaNum, mesesNum, aporteNum));
    setEvolucao(calcularEvolucaoMensal(capitalNum, taxaNum, mesesNum, aporteNum));
    setMostrarTabela(false);
  }

  const formatarMoeda = (n: number) =>
    n.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

  const totalAportado =
    (Number(capital.replace(",", ".")) || 0) +
    (Number(aporte.replace(",", ".")) || 0) * (Number(meses) || 0);
  const totalJuros = resultado !== null ? resultado - totalAportado : 0;

  return (
    <form onSubmit={handleSubmit}>
      <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
        <Field id="capital" label="capital inicial (R$)" value={capital} onChange={setCapital} placeholder="1000" />
        <Field id="taxa" label="taxa % a.m." value={taxa} onChange={setTaxa} placeholder="1" />
        <Field id="meses" label="meses" value={meses} onChange={setMeses} placeholder="12" inputMode="numeric" />
      </div>
      <div style={{ marginTop: 12 }}>
        <Field
          id="aporte"
          label="aporte mensal (R$) — opcional"
          value={aporte}
          onChange={setAporte}
          placeholder="0"
        />
      </div>
      <CalculateButton>calcular</CalculateButton>

      {resultado !== null && (
        <>
          <div style={{ display: "grid", gap: 12, marginTop: 20 }}>
            <ResultCard label="montante final" value={formatarMoeda(resultado)} />
            <ResultCard
              label="total investido (capital + aportes)"
              value={formatarMoeda(totalAportado)}
            />
            <ResultCard label="total em juros ganhos" value={formatarMoeda(totalJuros)} />
          </div>

          <button
            type="button"
            onClick={() => setMostrarTabela(!mostrarTabela)}
            style={{
              marginTop: 16,
              width: "100%",
              height: 40,
              border: "1px solid var(--border)",
              borderRadius: "var(--radius-sm)",
              background: "transparent",
              fontSize: 14,
              color: "var(--brand)",
            }}
          >
            {mostrarTabela ? "ocultar evolução mês a mês" : "ver evolução mês a mês"}
          </button>

          {mostrarTabela && (
            <div style={{ marginTop: 12, overflowX: "auto" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
                <thead>
                  <tr style={{ borderBottom: "1px solid var(--border)" }}>
                    <th style={{ textAlign: "left", padding: "8px 4px" }}>mês</th>
                    <th style={{ textAlign: "right", padding: "8px 4px" }}>saldo inicial</th>
                    <th style={{ textAlign: "right", padding: "8px 4px" }}>juros</th>
                    <th style={{ textAlign: "right", padding: "8px 4px" }}>aporte</th>
                    <th style={{ textAlign: "right", padding: "8px 4px" }}>saldo final</th>
                  </tr>
                </thead>
                <tbody>
                  {evolucao.map((linha) => (
                    <tr key={linha.mes} style={{ borderBottom: "1px solid var(--border)" }}>
                      <td style={{ padding: "6px 4px" }}>{linha.mes}</td>
                      <td style={{ textAlign: "right", padding: "6px 4px" }}>{formatarMoeda(linha.saldoInicial)}</td>
                      <td style={{ textAlign: "right", padding: "6px 4px", color: "var(--result)" }}>{formatarMoeda(linha.juros)}</td>
                      <td style={{ textAlign: "right", padding: "6px 4px" }}>{formatarMoeda(linha.aporte)}</td>
                      <td style={{ textAlign: "right", padding: "6px 4px", fontWeight: 600 }}>{formatarMoeda(linha.saldoFinal)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </>
      )}
    </form>
  );
}
