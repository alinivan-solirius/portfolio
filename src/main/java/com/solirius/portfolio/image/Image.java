package com.solirius.portfolio.image;


import jakarta.persistence.Column;
import lombok.Builder;
import lombok.Data;
import org.springframework.data.annotation.Id;

@Data
@Builder
public class Image {

    @Id
    private int id;

    private String filename;

    @Column(columnDefinition = "mime_type")
    private String mimeType;

    private byte[] data;
}


