export function calcularAumento(valor: number, percentual: number): number {
  return valor * (1 + percentual / 100);
}

export function calcularDesconto(valor: number, percentual: number): number {
  return valor * (1 - percentual / 100);
}

export function calcularProporcao(valor: number, percentual: number): number {
  return valor * (percentual / 100);
}

// "X é que porcentagem de Y?" — ex: 30 é que % de 200? → 15%
export function calcularPercentualRelativo(parte: number, total: number): number {
  if (total === 0) return 0;
  return (parte / total) * 100;
}
