"use client";

import { useState } from "react";
import { CalculateButton, ResultCard } from "../FormElements";
import { calcularIdade, calcularDiasProximoAniversario } from "./calculo";

function hojeISO() {
  const hoje = new Date();
  const ano = hoje.getFullYear();
  const mes = String(hoje.getMonth() + 1).padStart(2, "0");
  const dia = String(hoje.getDate()).padStart(2, "0");
  return `${ano}-${mes}-${dia}`;
}

export function IdadeCalculator() {
  const [nascimento, setNascimento] = useState("");
  const [referencia, setReferencia] = useState(hojeISO());
  const [resultado, setResultado] = useState<string | null>(null);
  const [diasAniversario, setDiasAniversario] = useState<number | null>(null);
  const [ehDataFutura, setEhDataFutura] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!nascimento) return;

    const dataNascimento = new Date(nascimento + "T00:00:00");
    const dataReferencia = new Date(referencia + "T00:00:00");

    const { anos, meses, dias } = calcularIdade(dataNascimento, dataReferencia);
    setResultado(`${anos} anos, ${meses} meses, ${dias} dias`);
    setEhDataFutura(referencia !== hojeISO());

    // "Dias até o próximo aniversário" só faz sentido em relação a hoje
    setDiasAniversario(calcularDiasProximoAniversario(dataNascimento, new Date()));
  }

  return (
    <form onSubmit={handleSubmit}>
      <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
        <div style={{ flex: 1, minWidth: 160 }}>
          <label
            htmlFor="nascimento"
            style={{ display: "block", fontSize: 13, color: "var(--text-secondary)", marginBottom: 4 }}
          >
            data de nascimento
          </label>
          <input
            id="nascimento"
            type="date"
            value={nascimento}
            onChange={(e) => setNascimento(e.target.value)}
            style={{
              width: "100%",
              height: 40,
              padding: "0 12px",
              border: "1px solid var(--border)",
              borderRadius: "var(--radius-sm)",
              fontSize: 15,
            }}
          />
        </div>
        <div style={{ flex: 1, minWidth: 160 }}>
          <label
            htmlFor="referencia"
            style={{ display: "block", fontSize: 13, color: "var(--text-secondary)", marginBottom: 4 }}
          >
            calcular idade em
          </label>
          <input
            id="referencia"
            type="date"
            value={referencia}
            onChange={(e) => setReferencia(e.target.value)}
            style={{
              width: "100%",
              height: 40,
              padding: "0 12px",
              border: "1px solid var(--border)",
              borderRadius: "var(--radius-sm)",
              fontSize: 15,
            }}
          />
        </div>
      </div>
      <p style={{ fontSize: 12, color: "var(--text-muted)", marginTop: 6 }}>
        deixe “calcular idade em” como hoje, ou troque por uma data passada ou futura —
        útil pra saber a idade numa prova, concurso ou aposentadoria.
      </p>
      <CalculateButton>calcular</CalculateButton>

      {resultado && (
        <div style={{ display: "grid", gap: 12, marginTop: 20 }}>
          <ResultCard
            label={ehDataFutura || referencia !== hojeISO() ? "idade na data informada" : "sua idade"}
            value={resultado}
          />
          {diasAniversario !== null && (
            <ResultCard
              label="dias até o próximo aniversário"
              value={diasAniversario === 0 ? "hoje! 🎉" : String(diasAniversario)}
            />
          )}
        </div>
      )}
    </form>
  );
}
