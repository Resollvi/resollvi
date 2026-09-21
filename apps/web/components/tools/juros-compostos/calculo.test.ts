import { describe, it, expect } from "vitest";
import { calcularJurosCompostos } from "./calculo";

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
});
