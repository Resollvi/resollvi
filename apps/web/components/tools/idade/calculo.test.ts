import { describe, it, expect } from "vitest";
import { calcularIdade } from "./calculo";

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
});
