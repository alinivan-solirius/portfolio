package com.solirius.portfolio.item;

import com.solirius.portfolio.image.Image;
import com.solirius.portfolio.image.ImageRepository;
import com.solirius.portfolio.item.Item;
import com.solirius.portfolio.item.ItemRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.List;

@Configuration
public class ItemConfig {

    Item swimr = new Item(
            1L,
            "Swimr",
            "A web app where you can find swimming places and swimming clubs, add a swimming place to a club and view geographical location of a swimming place on a map.",
            "https://github.com/thealinivan/hwa-swimr"
    );

    Item symptoms = new Item(
            2L,
            "Symptoms",
            "Android mobile application providing human medical diagnosis using medical data from API and crowd sourcing. Concepts: Diagnosis aggregation, API redundancy",
            "https://github.com/thealinivan/Symptoms"

    );

    Item cinema = new Item(
            3L,
            "Cinema",
            "A cinema website build with the MERN stack where you can book and pay for cinema tickets, view available movies, interact by comments and ratings and contact the site owner.",
            "https://github.com/thealinivan/QACinema-Project"
    );

    Item can = new Item(
            4L,
            "Can picker",
            "Robotic system designed to manipulate cylindric shape cans/tins/objects in a production environment. Composed of: 2 x camera (1080x960), 1 x RFID reader, 1 x Raspberry Pi 4, 1 x UR10 robot",
            "https://github.com/thealinivan/can-picker"
    );

    Item ml = new Item(
            5L,
            "ML augmentation",
            "Efficiency analysis over data augmentation in machine learning. ML: Convolutional Neural Networks & K-Nearest. Case scenario: Recognition of waste recycling materials (plastic and carton)",
            "https://github.com/thealinivan/ml-augmentation"
    );

    Item vet = new Item(
            6L,
            "Dr. House Vet",
            "A server rendered website build with Laravel, which presents the list of services of a veterinary clinic and provides means of contact, and includes administration panel.",
            "https://github.com/thealinivan/www-drhousevet-ro"
    );

    Image swimrIMG = new Image(
            1L,
            "image",
            "/Users/alin/Documents/github/portfolio/uploads/image1.png",
            swimr
    );
    Image symptomsIMG = new Image(
            2L,
            "image",
            "/Users/alin/Documents/github/portfolio/uploads/image2.png",
            symptoms
    );
    Image cinemaIMG = new Image(
            3L,
            "image",
            "/Users/alin/Documents/github/portfolio/uploads/image3.png",
            cinema
    );
    Image canIMG = new Image(
            4L,
            "image",
            "/Users/alin/Documents/github/portfolio/uploads/image4.png",
            can
    );
    Image mlIMG = new Image(
            5L,
            "image",
            "/Users/alin/Documents/github/portfolio/uploads/image5.png",
            ml
    );
    Image vetIMG = new Image(
            6L,
            "image",
            "/Users/alin/Documents/github/portfolio/uploads/image6.png",
            vet
    );

    @Bean
    CommandLineRunner itemCMD(ItemRepository itemRepository) {
        return args -> {
            itemRepository.saveAll(
                    List.of(swimr, symptoms, cinema, can, ml, vet)
            );
        };
    }

    @Bean
    CommandLineRunner imageCMD(ImageRepository imageRepository) {
        return args -> {
            imageRepository.saveAll(
                    List.of(swimrIMG, symptomsIMG, cinemaIMG, canIMG, mlIMG, vetIMG)
            );
        };
    }


}
