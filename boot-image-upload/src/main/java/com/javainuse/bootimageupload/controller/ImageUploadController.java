package com.javainuse.bootimageupload.controller;


import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;
import java.util.zip.DataFormatException;
import java.util.zip.Deflater;
import java.util.zip.Inflater;

import com.javainuse.bootimageupload.db.ImageRepository;
import com.javainuse.bootimageupload.model.ImageModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.http.ResponseEntity.BodyBuilder;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.persistence.NonUniqueResultException;


@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping(path = "image")
public class ImageUploadController {

    @Autowired
    ImageRepository imageRepository;

    @PostMapping("/upload")
    public BodyBuilder uplaodImage(@RequestParam("imageFile") MultipartFile file) throws IOException {

        try {
            System.out.println("Original Image Byte Size - " + file.getBytes().length);
            ImageModel img = new ImageModel(file.getOriginalFilename(), file.getContentType(),
                    compressBytes(file.getBytes()));
            imageRepository.save(img);
            return ResponseEntity.status(HttpStatus.OK);
        } catch (NonUniqueResultException e){
            throw new RuntimeException(" Sube una buena imagen " + e.getMessage());
        } catch (RuntimeException e){
            throw new RuntimeException(" Sube una buena imagen " + e.getMessage());
        }
    }

    @GetMapping(path = { "/get/{imageName}" })
    public ImageModel getImage(@PathVariable("imageName") String imageName) throws IOException {
        try {
            final Optional<ImageModel> retrievedImage = imageRepository.findByName(imageName);
            ImageModel img = new ImageModel(retrievedImage.get().getId(),retrievedImage.get().getName(), retrievedImage.get().getType(),
                    decompressBytes(retrievedImage.get().getPicByte()));
            return img;
        }catch (NoSuchElementException e){
            throw new RuntimeException("La imagen no existe no existe " + e.getMessage());
        }

    }
    @GetMapping(path={"/get"})
    public List<ImageModel> obtenerTodasLasImagenes(){
        return imageRepository.findAll();
    }

    @DeleteMapping(path={"/delete/{id}"})
    public void eliminar(@PathVariable("id") long idImage){
        imageRepository.deleteById(idImage);
    }

    // comprimir los bytes de la imagen antes de almacenarla en la base de datos
    public static byte[] compressBytes(byte[] data) {
        Deflater deflater = new Deflater();
        deflater.setInput(data);
        deflater.finish();

        ByteArrayOutputStream outputStream = new ByteArrayOutputStream(data.length);
        byte[] buffer = new byte[1024];
        while (!deflater.finished()) {
            int count = deflater.deflate(buffer);
            outputStream.write(buffer, 0, count);
        }
        try {
            outputStream.close();
        } catch (IOException e) {
        }
        System.out.println("Compressed Image Byte Size - " + outputStream.toByteArray().length);

        return outputStream.toByteArray();
    }

    // descomprime los bytes de la imagen antes de devolverla a la aplicación angular
    public static byte[] decompressBytes(byte[] data) {
        Inflater inflater = new Inflater();
        inflater.setInput(data);
        ByteArrayOutputStream outputStream = new ByteArrayOutputStream(data.length);
        byte[] buffer = new byte[1024];
        try {
            while (!inflater.finished()) {
                int count = inflater.inflate(buffer);
                outputStream.write(buffer, 0, count);
            }
            outputStream.close();
        } catch (IOException ioe) {
        } catch (DataFormatException e) {
        }
        return outputStream.toByteArray();
    }
}