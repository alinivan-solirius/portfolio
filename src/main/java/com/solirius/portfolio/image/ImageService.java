package com.solirius.portfolio.image;

import org.springframework.web.multipart.MultipartFile;

import java.util.List;

public interface ImageService {

    Image getImage(String filename);

    Image save(MultipartFile file) throws Exception;

    List<String> listFilenames();

    Iterable<Image> saveAll(List<MultipartFile> files);

    int delete(String filename);

    Image replace(String filename, MultipartFile file) throws Exception;
}