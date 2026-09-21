import { describe, it, expect } from "vitest";
import { calcularImc, classificarImc } from "./calculo";

describe("calcularImc", () => {
  it("calcula o IMC corretamente", () => {
    expect(calcularImc(70, 175)).toBeCloseTo(22.86, 1);
  });

  it("calcula o IMC para peso e altura diferentes", () => {
    expect(calcularImc(90, 180)).toBeCloseTo(27.78, 1);
  });
});

describe("classificarImc", () => {
  it("classifica abaixo do peso", () => {
    expect(classificarImc(17)).toBe("abaixo do peso");
  });

  it("classifica peso normal", () => {
    expect(classificarImc(22)).toBe("peso normal");
  });

  it("classifica sobrepeso", () => {
    expect(classificarImc(27)).toBe("sobrepeso");
  });

  it("classifica obesidade", () => {
    expect(classificarImc(32)).toBe("obesidade");
  });

  it("trata os limites das faixas corretamente", () => {
    expect(classificarImc(18.5)).toBe("peso normal");
    expect(classificarImc(25)).toBe("sobrepeso");
    expect(classificarImc(30)).toBe("obesidade");
  });
});
