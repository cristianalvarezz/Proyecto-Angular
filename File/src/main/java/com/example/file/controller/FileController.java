package com.example.file.controller;


import com.example.file.mesagge.FIleMesagge;
import com.example.file.model.FileModel;
import com.example.file.service.FileService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.mvc.method.annotation.MvcUriComponentsBuilder;


import java.io.IOException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

@Controller
@CrossOrigin("*")
public class FileController {

    @Autowired
    FileService fileService;

    //api para subir los archivos
    @PostMapping("/upload")
    public ResponseEntity<FIleMesagge> uploadFiles(@RequestParam("files") MultipartFile[] files) {

        String mesagge = "";
        try {

            //lista donde tendremos los archivos
            List<String> filesName = new ArrayList<>();

            Arrays.asList(files).stream().forEach(file -> {
                fileService.save(file);
                filesName.add(file.getOriginalFilename());
            });
            //retorno los nombres de los archivos guardados
            mesagge = "Se subieron los archvos correctamente" + filesName;
            return ResponseEntity.status(HttpStatus.OK).body(new FIleMesagge(mesagge));
        } catch (Exception e) {
            mesagge = "Fallo al subir los archivos";
            return ResponseEntity.status(HttpStatus.EXPECTATION_FAILED).body(new FIleMesagge(mesagge));
        }
    }

    @GetMapping("/files")
    public ResponseEntity<List<FileModel>> getFiles() {
        List<FileModel> filesInfo = fileService.loadAll().map(path -> {
            String filename = path.getFileName().toString();
            String url = MvcUriComponentsBuilder.fromMethodName(FileController.class, "getFile"
                    , path.getFileName().toString()).build().toString();
            return new FileModel(filename, url);
        }).collect(Collectors.toList());
        return ResponseEntity.status(HttpStatus.OK).body(filesInfo);
    }
    //esto ultimo es para decir .+ lo que sea sea jpg etc
    @GetMapping("files/{filename:.+}")
    public ResponseEntity<Resource> getFile(@PathVariable String filename){
       Resource file = fileService.load(filename);
        return ResponseEntity.ok().header(HttpHeaders.CONTENT_DISPOSITION,
               "atachment;filename=\""+file.getFilename()+ "\"").body(file);
    }

    @GetMapping("/delete/{filename:.+}")
    public ResponseEntity<FIleMesagge> deleteFile(@PathVariable String filename){
        String message = "";

        try {
            message=fileService.deleteFile(filename);
            return ResponseEntity.status(HttpStatus.OK).body(new FIleMesagge(message));
        }catch (Exception e){
            return ResponseEntity.status(HttpStatus.EXPECTATION_FAILED).body(new FIleMesagge(message));

        }
    }
}