package com.solirius.portfolio.item;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.List;

@Configuration
public class ItemConfig {

    @Bean
    CommandLineRunner commandLineRunner(ItemRepository repository) {
        return args -> {
            Item swimr = new Item(
                    1L,
                    "Swimr",
                    "https://wwww.github.com/thealinivan/swimr"
            );

            Item symptoms = new Item(
                    2L,
                    "Symptoms",
                    "https://wwww.github.com/thealinivan/QACinema-Project"
            );

            repository.saveAll(
                    List.of(swimr, symptoms)
            );
        };
    }

}
