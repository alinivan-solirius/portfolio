package com.solirius.portfolio.item;

import com.solirius.portfolio.image.ImageDTO;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@Data
public class ItemDTO {
    private Long id;
    private String title;
    private String description;
    private String url;
    private List<ImageDTO> images;


    public ItemDTO(){}

    public ItemDTO(String title, String description, String url, List<ImageDTO> images) {
        super();
        this.title = title;
        this.description = description;
        this.url = url;
        this.images = images;
    }

    public ItemDTO(Long id, String title, String description, String url, List<ImageDTO> images) {
        super();
        this.id = id;
        this.title = title;
        this.description = description;
        this.url = url;
        this.images = images;
    }

}
