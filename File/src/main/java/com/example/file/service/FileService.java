package com.example.file.service;

import org.springframework.core.io.Resource;
import org.springframework.web.multipart.MultipartFile;


import java.nio.file.Path;
import java.util.stream.Stream;

public interface FileService {

    //carpeta que nos creara los archivos
    public void init();
    //metodo que resive varios archivos
    public void save(MultipartFile file);

    //crear los archivos
    public Resource load(String filename);

    //cada vez que se inicie se vaciara el storage con los archivos
    public void deleteAll();

    //cargar todos los archivos
    public Stream<Path> loadAll();

    public String deleteFile(String filename);


}
