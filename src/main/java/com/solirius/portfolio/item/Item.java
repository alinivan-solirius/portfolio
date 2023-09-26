package com.solirius.portfolio.item;

import jakarta.persistence.*;

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
            name = "url",
            nullable = false,
            columnDefinition = "Text"
    )
    private String url;

    public Item() {}

    public Item(String title, String url) {
        this.title = title;
        this.url = url;
    }

    public Item(Long id, String title, String url) {
        this.id = id;
        this.title = title;
        this.url = url;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    @Override
    public String toString() {
        return "Item{" +
                "id=" + id +
                ", title='" + title + '\'' +
                ", url='" + url + '\'' +
                '}';
    }

}
