package com.solirius.portfolio.image;

import com.solirius.portfolio.item.Item;
import jakarta.persistence.*;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Entity(name="image")
@Table(
        name = "image",
        uniqueConstraints = {
                @UniqueConstraint(
                        name = "image_url_unique",
                        columnNames = "url"
                )
        }
)
@Getter
@Setter
@Data
public class Image {
    @Id
    @SequenceGenerator(
            name = "image_sequence",
            sequenceName = "image_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "image_sequence"
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
            name = "url",
            nullable = false,
            columnDefinition = "Text"
    )
    private String url;

    @ManyToOne
    private Item item;

    public Image() {
    }

    public Image(String title, String url) {
        this.title = title;
        this.url = url;
    }

    public Image(Long id, String title, String url) {
        this.id = id;
        this.title = title;
        this.url = url;
    }

    public void addAttribute(String msg, String s) {
    }

}

