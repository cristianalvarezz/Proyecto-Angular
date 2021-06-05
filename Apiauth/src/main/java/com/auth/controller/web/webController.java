package com.auth.controller.web;

import com.auth.entity.Auth;
import com.auth.persistence.AuthRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RestController
@RequestMapping("/main")
public class webController {

    @Autowired
    private AuthRepository authRepository;

    @PostMapping()
    public void guardar(@RequestBody Auth heroe) {
        authRepository.guardar(heroe);

    }

    @GetMapping
    public List<Auth> obtenerTodo() {
        return authRepository.obtenerTodo();
    }

    @GetMapping(path = {"/{id}"})
    public Optional<Auth> listarId(@PathVariable("id") int id) {
        System.out.print(id);
        return authRepository.obtenerAuth(id);
    }

    
    @GetMapping(path = {"n/{'email'}"})
    public Optional<Auth> obtenerPorEmail(@PathVariable("'email'") String email){
        return  authRepository.obtenerPorEmail(email);
    }
    
    @GetMapping("{password}/{email}")
    @ResponseBody
    public Optional<Auth> obtenerPorEmailYpassword(@PathVariable String password, @PathVariable String email){
        return  authRepository.obtenerEmailYpassword(password,email);
    }   
    
 

    @PutMapping(path = {"/{id}"})
    public Auth editar(@RequestBody Auth heroe, @PathVariable("id") int id) {
        heroe.setId(id);
        return authRepository.editar(heroe);
    }

    @DeleteMapping(path = {"/{id}"})
    public void eliminar(@PathVariable("id") Integer id) {
        authRepository.borrar(id);
    }

}
