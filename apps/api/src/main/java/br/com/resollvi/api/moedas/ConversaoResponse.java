package br.com.resollvi.api.moedas;

public record ConversaoResponse(String de, String para, double valor, double resultado, String dataCotacao) {
}
