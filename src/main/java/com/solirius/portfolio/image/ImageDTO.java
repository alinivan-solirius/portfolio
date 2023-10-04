package com.solirius.portfolio.image;

import com.solirius.portfolio.item.Item;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Data
public class ImageDTO {
    private Long id;
    private String title;
    private String url;
    private Item item;


    public ImageDTO(){}

    public ImageDTO(String title, String url) {
        super();
        this.title = title;
        this.url = url;
    }

    public ImageDTO(Long id, String title, String url) {
        super();
        this.id = id;
        this.title = title;
        this.url = url;
    }

}
