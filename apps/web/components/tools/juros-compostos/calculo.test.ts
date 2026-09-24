import { describe, it, expect } from "vitest";
import { calcularJurosCompostos, calcularEvolucaoMensal } from "./calculo";

describe("calcularJurosCompostos", () => {
  it("calcula o montante final corretamente", () => {
    // 1000 a 1% a.m. por 12 meses = 1000 * 1.01^12
    expect(calcularJurosCompostos(1000, 1, 12)).toBeCloseTo(1126.83, 1);
  });

  it("retorna o capital original com taxa zero", () => {
    expect(calcularJurosCompostos(500, 0, 12)).toBe(500);
  });

  it("retorna o capital original com zero meses", () => {
    expect(calcularJurosCompostos(500, 2, 0)).toBe(500);
  });

  it("soma os aportes mensais ao montante final", () => {
    // 1000 inicial + 100/mês por 3 meses a 1% a.m.
    // mês1: 1000*1.01+100=1110; mês2: 1110*1.01+100=1221.1; mês3: 1221.1*1.01+100=1333.311
    expect(calcularJurosCompostos(1000, 1, 3, 100)).toBeCloseTo(1333.31, 1);
  });
});

describe("calcularEvolucaoMensal", () => {
  it("gera uma linha por mês", () => {
    const linhas = calcularEvolucaoMensal(1000, 1, 3, 0);
    expect(linhas).toHaveLength(3);
  });

  it("calcula a primeira linha corretamente", () => {
    const [primeira] = calcularEvolucaoMensal(1000, 1, 1, 0);
    expect(primeira.saldoInicial).toBe(1000);
    expect(primeira.juros).toBeCloseTo(10, 2);
    expect(primeira.saldoFinal).toBeCloseTo(1010, 2);
  });

  it("acumula o aporte mensal no saldo final de cada linha", () => {
    const linhas = calcularEvolucaoMensal(1000, 1, 2, 100);
    expect(linhas[0].saldoFinal).toBeCloseTo(1110, 2);
    expect(linhas[1].saldoInicial).toBeCloseTo(1110, 2);
    expect(linhas[1].saldoFinal).toBeCloseTo(1221.1, 2);
  });
});
