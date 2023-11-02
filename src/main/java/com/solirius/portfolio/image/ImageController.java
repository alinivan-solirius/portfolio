package com.solirius.portfolio.image;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "api/image")
public class ImageController {

    private final ImageService imageService;

    @Autowired
    public ImageController(ImageService imageService) {
        this.imageService = imageService;
    }

    @PostMapping
    public ImageDTO createImage(@RequestBody Image image) {
        return imageService.createImage(image);
    }

    @CrossOrigin
    @GetMapping
    public List<ImageDTO> getAllImages() {
        return imageService.getAllImages();
    }

    @PutMapping("{id}")
    public ImageDTO updateImage(@RequestBody Image image, @PathVariable Long id) {
        return imageService.updateImage(id, image);
    }

    @DeleteMapping("{id}")
    public boolean deleteImage(@PathVariable Long id) {
        return imageService.deleteImage(id);

    }
}

