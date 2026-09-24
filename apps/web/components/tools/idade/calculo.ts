export type Idade = { anos: number; meses: number; dias: number };

export function calcularIdade(nascimento: Date, referencia: Date = new Date()): Idade {
  let anos = referencia.getFullYear() - nascimento.getFullYear();
  let meses = referencia.getMonth() - nascimento.getMonth();
  let dias = referencia.getDate() - nascimento.getDate();

  if (dias < 0) {
    meses -= 1;
    const ultimoDiaMesAnterior = new Date(referencia.getFullYear(), referencia.getMonth(), 0).getDate();
    dias += ultimoDiaMesAnterior;
  }

  if (meses < 0) {
    anos -= 1;
    meses += 12;
  }

  return { anos, meses, dias };
}

export function calcularDiasProximoAniversario(nascimento: Date, hoje: Date = new Date()): number {
  const hojeSemHora = new Date(hoje.getFullYear(), hoje.getMonth(), hoje.getDate());
  let proximo = new Date(hoje.getFullYear(), nascimento.getMonth(), nascimento.getDate());

  if (proximo.getTime() < hojeSemHora.getTime()) {
    proximo = new Date(hoje.getFullYear() + 1, nascimento.getMonth(), nascimento.getDate());
  }

  const diffMs = proximo.getTime() - hojeSemHora.getTime();
  return Math.round(diffMs / (1000 * 60 * 60 * 24));
}
