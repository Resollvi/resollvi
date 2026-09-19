export function calcularAumento(valor: number, percentual: number): number {
  return valor * (1 + percentual / 100);
}

export function calcularDesconto(valor: number, percentual: number): number {
  return valor * (1 - percentual / 100);
}

export function calcularProporcao(valor: number, percentual: number): number {
  return valor * (percentual / 100);
}
