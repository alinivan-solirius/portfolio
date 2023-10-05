package com.solirius.portfolio.item;

import com.solirius.portfolio.image.Image;
import jakarta.persistence.*;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

@Entity(name="item")
@Table(
        name = "item",
        uniqueConstraints = {
                @UniqueConstraint(
                        name = "item_url_unique",
                        columnNames = "url"
                )
        }
)
@Getter
@Setter
@Data
public class Item {

    @Id
    @SequenceGenerator(
            name = "item_sequence",
            sequenceName = "item_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "item_sequence"
    )
    @Column(
            name = "id",
            updatable = false
    )
    private Long id;
    @Column(
            name = "title",
            nullable = false,
            columnDefinition = "Text"
    )
    private String title;
    @Column(
            name="description",
            nullable = false,
            columnDefinition = "Text"
    )
    private String description;
    @Column(
            name = "url",
            nullable = false,
            columnDefinition = "Text"
    )
    private String url;

    @OneToMany(mappedBy = "item")
    private List<Image> images = new ArrayList<>();

    public Item() {}

    public Item(String title, String description, String url) {
        this.title = title;
        this.description = description;
        this.url = url;
    }

    public Item(Long id, String title, String description, String url) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.url = url;
    }

    public Item(Long id, String title, String description, String url, List<Image> images) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.url = url;
        this.images = images;
    }

}
