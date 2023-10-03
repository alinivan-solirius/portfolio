package com.solirius.portfolio.image;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Transactional(readOnly = true)
public interface ImageRepository extends CrudRepository<Image, Integer> {
    Optional<Image> findByFilename(String filename);

    boolean existsByFilename(String filename);

    List<String> findAllFilenames();

    int deleteByFilename(@Param("filename") String filename);
}
