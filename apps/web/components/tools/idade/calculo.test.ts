import { describe, it, expect } from "vitest";
import { calcularIdade, calcularDiasProximoAniversario } from "./calculo";

describe("calcularIdade", () => {
  it("calcula anos completos corretamente", () => {
    const nascimento = new Date(1990, 0, 1); // 1 jan 1990
    const hoje = new Date(2026, 0, 1); // 1 jan 2026
    expect(calcularIdade(nascimento, hoje)).toEqual({ anos: 36, meses: 0, dias: 0 });
  });

  it("calcula quando o aniversário ainda não chegou este ano", () => {
    const nascimento = new Date(1990, 11, 25); // 25 dez 1990
    const hoje = new Date(2026, 0, 1); // 1 jan 2026
    expect(calcularIdade(nascimento, hoje)).toEqual({ anos: 35, meses: 0, dias: 7 });
  });

  it("calcula meses e dias corretamente no meio do ano", () => {
    const nascimento = new Date(2000, 5, 15); // 15 jun 2000
    const hoje = new Date(2026, 8, 19); // 19 set 2026
    expect(calcularIdade(nascimento, hoje)).toEqual({ anos: 26, meses: 3, dias: 4 });
  });

  it("aceita uma data de referência no futuro", () => {
    const nascimento = new Date(2000, 5, 15); // 15 jun 2000
    const dataFutura = new Date(2050, 5, 15); // 15 jun 2050
    expect(calcularIdade(nascimento, dataFutura)).toEqual({ anos: 50, meses: 0, dias: 0 });
  });
});

describe("calcularDiasProximoAniversario", () => {
  it("calcula quando o aniversário ainda vai acontecer este ano", () => {
    const nascimento = new Date(2000, 11, 25); // 25 dez
    const hoje = new Date(2026, 11, 20); // 20 dez 2026
    expect(calcularDiasProximoAniversario(nascimento, hoje)).toBe(5);
  });

  it("calcula quando o aniversário já passou este ano (aponta pro ano seguinte)", () => {
    const nascimento = new Date(2000, 0, 5); // 5 jan
    const hoje = new Date(2026, 0, 10); // 10 jan 2026 — já passou
    expect(calcularDiasProximoAniversario(nascimento, hoje)).toBe(360);
  });

  it("retorna zero quando o aniversário é hoje", () => {
    const nascimento = new Date(2000, 5, 15);
    const hoje = new Date(2026, 5, 15);
    expect(calcularDiasProximoAniversario(nascimento, hoje)).toBe(0);
  });
});
