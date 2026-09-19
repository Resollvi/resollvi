package br.com.resollvi.api;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cache.annotation.EnableCaching;

@SpringBootApplication
@EnableCaching
public class ResollviApiApplication {
    public static void main(String[] args) {
        SpringApplication.run(ResollviApiApplication.class, args);
    }
}
