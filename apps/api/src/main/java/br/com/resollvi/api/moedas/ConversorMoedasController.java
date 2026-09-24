package br.com.resollvi.api.moedas;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ConversorMoedasController {

    private final CotacaoService cotacaoService;

    public ConversorMoedasController(CotacaoService cotacaoService) {
        this.cotacaoService = cotacaoService;
    }

    @CrossOrigin(origins = "${app.cors.allowed-origin}")
    @GetMapping("/api/conversor-moedas")
    public ConversaoResponse converter(
        @RequestParam String de,
        @RequestParam String para,
        @RequestParam double valor
    ) {
        CotacaoService.CotacaoResultado cotacao = cotacaoService.buscarTaxa(de, para);
        double resultado = valor * cotacao.taxa();
        return new ConversaoResponse(de, para, valor, resultado, cotacao.data());
    }
}
