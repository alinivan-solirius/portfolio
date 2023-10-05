package com.solirius.portfolio.item;

import com.solirius.portfolio.image.Image;
import com.solirius.portfolio.image.ImageDTO;
import com.solirius.portfolio.utils.Mapper;
import org.springframework.stereotype.Service;
import com.solirius.portfolio.image.ImageMapper;

import java.util.ArrayList;
import java.util.List;

@Service
public class ItemMapper implements Mapper<Item, ItemDTO> {

    private ImageMapper imageMapper;

    public ItemMapper(ImageMapper imageMapper){
        super();
        this.imageMapper = imageMapper;
    }

    @Override
    public ItemDTO mapToDTO(Item item) {
        ItemDTO dto = new ItemDTO();
        List<ImageDTO> images = new ArrayList<>();
        dto.setId(item.getId());
        dto.setTitle(item.getTitle());
        dto.setDescription(item.getDescription());
        dto.setUrl(item.getUrl());
        for (Image image: item.getImages()){
            images.add(imageMapper.mapToDTO(image));
        }
        dto.setImages(images);
        return dto;
    }

    @Override
    public Item mapFromDTO(ItemDTO dto) {
        return null;
    }
}
