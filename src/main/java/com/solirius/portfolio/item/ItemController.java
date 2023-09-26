package com.solirius.portfolio.item;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


import java.util.List;

@RestController
@RequestMapping(path = "api/item")
public class ItemController {

    private final ItemService itemService;

    @Autowired
    public ItemController(ItemService itemService) {
        this.itemService = itemService;
    }

    @PostMapping
    public ItemDTO createItem(@RequestBody Item item) {
        return itemService.createItem(item);
    }

    @GetMapping
    public List<ItemDTO> getAllItems() {
        return itemService.getAllItems();
    }
    @PutMapping("{id}")
    public ItemDTO updateItem(@RequestBody Item item, @PathVariable Long id) {
        return itemService.updateItem(id, item);
    }

    @DeleteMapping("{id}")
    public boolean deleteItem(@PathVariable Long id) {
        return itemService.deleteItem(id);
    }

}
