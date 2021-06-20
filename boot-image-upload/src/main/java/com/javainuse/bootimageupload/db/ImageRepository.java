package com.javainuse.bootimageupload.db;

import java.util.Optional;

import com.javainuse.bootimageupload.model.ImageModel;
import org.springframework.data.jpa.repository.JpaRepository;



public interface ImageRepository extends JpaRepository<ImageModel, Long> {
    Optional<ImageModel> findByName(String name);


    void deleteAllById(int idImage);
}
