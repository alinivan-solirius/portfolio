package com.solirius.portfolio.image;

import jakarta.persistence.Column;
import lombok.Builder;
import lombok.Data;
import lombok.Getter;
import org.springframework.data.annotation.Id;

import java.util.Arrays;

@Getter
@Data
@Builder
public class Image {

    @Id
    private Long id;

    private String filename;

    @Column(name = "mime_type")
    private String mimeType;

    private byte[] data;

    public Image(int id) {}

    public Image(String filename, String mimeType, byte[] data) {
        this.filename = filename;
        this.mimeType = mimeType;
        this.data = data;
    }

    public Image(Long id, String filename, String mimeType, byte[] data) {
        this.id = id;
        this.filename = filename;
        this.mimeType = mimeType;
        this.data = data;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setFilename(String filename) {
        this.filename = filename;
    }

    public void setMimeType(String mimeType) {
        this.mimeType = mimeType;
    }

    public void setData(byte[] data) {
        this.data = data;
    }

    @Override
    public String toString() {
        return "Image{" +
                "id=" + id +
                ", filename='" + filename + '\'' +
                ", mimeType='" + mimeType + '\'' +
                ", data=" + Arrays.toString(data) +
                '}';
    }
}


