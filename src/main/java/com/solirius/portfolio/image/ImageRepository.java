package com.solirius.portfolio.image;

import com.solirius.portfolio.item.Item;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ImageRepository extends JpaRepository<Image, Long> {
    Optional<Image> findImageByUrl(String url);
}
