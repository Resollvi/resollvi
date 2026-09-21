import { describe, it, expect } from "vitest";
import { calcularAumento, calcularDesconto, calcularProporcao } from "./calculo";

describe("calcularAumento", () => {
  it("aplica um aumento percentual corretamente", () => {
    expect(calcularAumento(200, 15)).toBeCloseTo(230, 2);
  });

  it("retorna o mesmo valor com aumento de 0%", () => {
    expect(calcularAumento(100, 0)).toBe(100);
  });
});

describe("calcularDesconto", () => {
  it("aplica um desconto percentual corretamente", () => {
    expect(calcularDesconto(200, 15)).toBeCloseTo(170, 2);
  });

  it("retorna zero com desconto de 100%", () => {
    expect(calcularDesconto(200, 100)).toBe(0);
  });
});

describe("calcularProporcao", () => {
  it("calcula a parcela percentual de um valor", () => {
    expect(calcularProporcao(200, 15)).toBeCloseTo(30, 2);
  });

  it("retorna zero para percentual zero", () => {
    expect(calcularProporcao(200, 0)).toBe(0);
  });
});
