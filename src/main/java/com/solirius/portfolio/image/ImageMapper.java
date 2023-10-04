package com.solirius.portfolio.image;


import com.solirius.portfolio.item.Item;
import com.solirius.portfolio.item.ItemDTO;
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
        Image image = new Image();
        image.setTitle(dto.getTitle());
        image.setUrl(dto.getUrl());
        return image;
    }
}
