export function calcularJurosCompostos(
  capital: number,
  taxaMensal: number,
  meses: number
): number {
  return capital * Math.pow(1 + taxaMensal / 100, meses);
}
