package br.com.resollvi.api.moedas;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.http.MediaType;
import org.springframework.http.client.JdkClientHttpRequestFactory;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestClient;

import java.net.http.HttpClient;
import java.util.Map;

@Service
public class CotacaoService {

    private static final Logger log = LoggerFactory.getLogger(CotacaoService.class);

    // O HttpClient padrão do Java NÃO segue redirecionamentos (301/302) por
    // padrão — precisa ser configurado explicitamente. Sem isso, uma API que
    // redirecione (ex: Cloudflare fazendo um 301) entrega a página HTML do
    // redirecionamento em vez do JSON de verdade.
    private final HttpClient httpClient = HttpClient.newBuilder()
        .followRedirects(HttpClient.Redirect.NORMAL)
        .build();

    private final RestClient restClient = RestClient.builder()
        .baseUrl("https://api.frankfurter.app")
        .requestFactory(new JdkClientHttpRequestFactory(httpClient))
        .defaultHeader("Accept", MediaType.APPLICATION_JSON_VALUE)
        .defaultHeader("User-Agent", "Resollvi/1.0 (+https://resollvi.com.br)")
        .build();

    @Cacheable(value = "cotacoes", key = "#de + '-' + #para")
    public double buscarTaxa(String de, String para) {
        String corpoBruto = restClient
            .get()
            .uri("/latest?from={de}&to={para}", de, para)
            .retrieve()
            .body(String.class);

        if (corpoBruto == null || !corpoBruto.trim().startsWith("{")) {
            log.error("Resposta inesperada da API de câmbio (não é JSON): {}", corpoBruto);
            throw new IllegalStateException(
                "cotação indisponível no momento — a API externa não respondeu com JSON válido"
            );
        }

        FrankfurterResponse response;
        try {
            response = new com.fasterxml.jackson.databind.ObjectMapper()
                .readValue(corpoBruto, FrankfurterResponse.class);
        } catch (Exception e) {
            log.error("Falha ao interpretar resposta da API de câmbio: {}", corpoBruto, e);
            throw new IllegalStateException("cotação indisponível no momento", e);
        }

        if (response.rates() == null || response.rates().get(para) == null) {
            throw new IllegalStateException("par de moedas não suportado: " + de + " -> " + para);
        }
        return response.rates().get(para);
    }

    @com.fasterxml.jackson.annotation.JsonIgnoreProperties(ignoreUnknown = true)
    private record FrankfurterResponse(String base, Map<String, Double> rates) {
    }
}
