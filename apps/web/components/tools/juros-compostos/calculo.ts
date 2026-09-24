export type LinhaEvolucao = {
  mes: number;
  saldoInicial: number;
  juros: number;
  aporte: number;
  saldoFinal: number;
};

export function calcularJurosCompostos(
  capital: number,
  taxaMensal: number,
  meses: number,
  aporteMensal: number = 0
): number {
  let saldo = capital;
  const taxa = taxaMensal / 100;
  for (let i = 0; i < meses; i++) {
    saldo = saldo * (1 + taxa) + aporteMensal;
  }
  return saldo;
}

export function calcularEvolucaoMensal(
  capital: number,
  taxaMensal: number,
  meses: number,
  aporteMensal: number = 0
): LinhaEvolucao[] {
  const taxa = taxaMensal / 100;
  const linhas: LinhaEvolucao[] = [];
  let saldo = capital;

  for (let mes = 1; mes <= meses; mes++) {
    const saldoInicial = saldo;
    const juros = saldoInicial * taxa;
    const saldoFinal = saldoInicial + juros + aporteMensal;
    linhas.push({ mes, saldoInicial, juros, aporte: aporteMensal, saldoFinal });
    saldo = saldoFinal;
  }

  return linhas;
}
