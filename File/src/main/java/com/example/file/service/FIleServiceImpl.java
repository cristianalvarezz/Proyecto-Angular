package com.example.file.service;

import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.stereotype.Service;
import org.springframework.util.FileSystemUtils;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.net.MalformedURLException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.stream.Stream;

@Service
public class FIleServiceImpl implements FileService{
//el root siginfica que se almacenaran los archivos a nivel de raiz

    private final Path root = Paths.get("uploads");
    @Override
    public void init() {
        try {
            Files.createDirectories(root);
        } catch (IOException e) {
            throw  new RuntimeException("No se puede iniciar el storage");
        }
    }

    @Override
    public void save(MultipartFile file) {
        //de donde queremos copiar y a donde vamos a mandar
        //obtendremos el stream y lo vamos a llevar a la carpeta que vamos a crear con el nombre original
        try {
            Files.copy(file.getInputStream(),this.root.resolve(file.getOriginalFilename()));
        } catch (IOException e) {
            throw  new RuntimeException("No se puede guardar el archivo");
        }
    }

    //cargar nustros archivos al darle click
    @Override
    public Resource load(String filename) {

        try {
            Path file =root.resolve(filename);
            Resource  resource = new UrlResource(file.toUri());
            if (resource.exists() || resource.isReadable()){
                //quiere decir que encontro un recurso
                return resource;
            }else  {
                throw  new RuntimeException("No se puede leer el archivo");
            }
        } catch (MalformedURLException e) {
            throw  new RuntimeException("Error : "+e.getMessage());
        }


    }

    @Override
    public void deleteAll() {
        FileSystemUtils.deleteRecursively(root.toFile());
    }

    @Override
    public Stream<Path> loadAll() {
        //recorra toda la carpeta todo el storage y busque todos los archivos
        //profundidad 1 por que no tendremos mas carpetas
        try {
            return Files.walk(this.root,1).filter(path -> !path.equals(this.root))
                    //con relaitiva le decimos que cree una ruta relativa
                    .map(this.root::relativize);
        } catch (IOException e) {
            throw  new RuntimeException("No se puede cargar los archivo");
        }
    }

    @Override
    public String deleteFile(String filename) {
        try {
            boolean delete = Files.deleteIfExists(this.root.resolve(filename));
            return "Borrado";
        } catch (IOException e) {
            e.printStackTrace();
            return "No Borrado";
        }
    }
}
