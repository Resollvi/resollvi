export type FaixaImc = "abaixo do peso" | "peso normal" | "sobrepeso" | "obesidade";

export function calcularImc(pesoKg: number, alturaCm: number): number {
  const alturaM = alturaCm / 100;
  return pesoKg / (alturaM * alturaM);
}

export function classificarImc(imc: number): FaixaImc {
  if (imc < 18.5) return "abaixo do peso";
  if (imc < 25) return "peso normal";
  if (imc < 30) return "sobrepeso";
  return "obesidade";
}
