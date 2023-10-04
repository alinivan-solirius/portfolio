package com.solirius.portfolio.image;


import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class ImageService {

    private final ImageMapper imageMapper;
    private final ImageRepository imageRepository;

    @Autowired
    public ImageService(ImageRepository imageRepository, ImageMapper imageMapper) {
        this.imageRepository = imageRepository;
        this.imageMapper = imageMapper;
    }

    public ImageDTO createImage(Image image) {
        duplicateUrlCheck(image);
        Image savedImage = imageRepository.save(image);
        return imageMapper.mapToDTO(savedImage);
    }

    public List<ImageDTO> getAllImages() {
        List<ImageDTO> dtos = new ArrayList<>();
        for (Image image : imageRepository.findAll()){
            dtos.add(imageMapper.mapToDTO(image));
        }
        return dtos;
    }

    public ImageDTO updateImage(Long id, Image image) {
        Image currentImage = imageRepository.findById(id).orElseThrow(EntityNotFoundException::new);
        currentImage.setTitle(image.getTitle());
        currentImage.setUrl(image.getUrl());
        Image updatedImage = imageRepository.save(currentImage);
        return imageMapper.mapToDTO(updatedImage);
    }

    public boolean deleteImage(Long id) {
        imageRepository.deleteById(id);
        return !imageRepository.existsById(id);
    }

    private void duplicateUrlCheck(Image image) {
        Optional<Image> imageOptional = imageRepository.findImageByUrl((image.getUrl()));
        if (imageOptional.isPresent()) {
            throw new IllegalStateException("url taken");
        }
    }

}
