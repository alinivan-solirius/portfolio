package com.solirius.portfolio.image;

import com.solirius.portfolio.utils.Mapper;
import org.springframework.stereotype.Service;

@Service
public class ImageMapper implements Mapper<Image, ImageDTO> {

    @Override
    public ImageDTO mapToDTO(Image image) {
        ImageDTO dto = new ImageDTO();
        dto.setId(image.getId());
        dto.setTitle(image.getTitle());
        dto.setUrl(image.getUrl());
        return dto;
    }

    @Override
    public Image mapFromDTO(ImageDTO dto) {
        return null;
    }
}
