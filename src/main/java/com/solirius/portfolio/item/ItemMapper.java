package com.solirius.portfolio.item;

import com.solirius.portfolio.utils.Mapper;
import org.springframework.stereotype.Service;

@Service
public class ItemMapper implements Mapper<Item, ItemDTO> {

    @Override
    public ItemDTO mapToDTO(Item item) {
        ItemDTO dto = new ItemDTO();
        dto.setId(item.getId());
        dto.setTitle(item.getTitle());
        dto.setDescription(item.getDescription());
        dto.setUrl(item.getUrl());
        return dto;
    }

    @Override
    public Item mapFromDTO(ItemDTO dto) {
        Item item = new Item();
        item.setTitle(dto.getTitle());
        item.setDescription(dto.getDescription());
        item.setUrl(dto.getUrl());
        return item;
    }
}
