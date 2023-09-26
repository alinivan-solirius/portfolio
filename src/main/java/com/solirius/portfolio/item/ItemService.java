package com.solirius.portfolio.item;

import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.dao.DuplicateKeyException;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class ItemService {

    private final ItemMapper itemMapper;
    private final ItemRepository itemRepository;

    @Autowired
    public ItemService(ItemRepository itemRepository, ItemMapper itemMapper) {
        this.itemRepository = itemRepository;
        this.itemMapper = itemMapper;
    }

    public ItemDTO createItem(Item item) {
        duplicateUrlCheck(item);
        Item savedItem = itemRepository.save(item);
        return itemMapper.mapToDTO(savedItem);
    }

    public List<ItemDTO> getAllItems() {
        List<ItemDTO> dtos = new ArrayList<>();
        for (Item item : itemRepository.findAll()){
            dtos.add(itemMapper.mapToDTO(item));
        }
        return dtos;
    }

    public ItemDTO updateItem(Long id, Item item) {
        Item currentItem = itemRepository.findById(id).orElseThrow(EntityNotFoundException::new);
        currentItem.setTitle(item.getTitle());
        currentItem.setUrl(item.getUrl());
        Item updatedItem = itemRepository.save(currentItem);
        return itemMapper.mapToDTO(updatedItem);
    }

    public boolean deleteItem(Long id) {
        itemRepository.deleteById(id);
        return !itemRepository.existsById(id);
    }

    private void duplicateUrlCheck(Item item) {
        Optional<Item> itemOptional = itemRepository.findItemByUrl((item.getUrl()));
        if (itemOptional.isPresent()) {
            throw new IllegalStateException("url taken");
        }
    }

}
