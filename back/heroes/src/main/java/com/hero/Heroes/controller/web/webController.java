package com.hero.Heroes.controller.web;

import com.hero.Heroes.entity.Heroe;
import com.hero.Heroes.persistence.HeroesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;


@CrossOrigin(origins = "http://localhost:4200",maxAge = 3600)
@RestController
@RequestMapping("/main")
public class webController {
    @Autowired
    private HeroesRepository heroesRepository;

    @PostMapping()
    public void guardar(@RequestBody Heroe heroe){
        heroesRepository.guardar(heroe);

    }

    @GetMapping
    public List<Heroe> obtenerTodo(){
        return heroesRepository.obtenerTodo();
    }

    @GetMapping(path = {"/{id}"})
    public Optional<Heroe> listarId(@PathVariable("id") int id){
        return heroesRepository.obtenerHeroe(id);
    }

    @PutMapping(path={"/{id}"})
    public  Heroe editar(@RequestBody Heroe heroe,@PathVariable("id") int id){
       heroe.setId(id);
       return heroesRepository.editar(heroe);
    }

    @DeleteMapping(path = {"/{id}"})
    public void eliminar(@PathVariable("id") Integer id){
        heroesRepository.borrar(id);
    }

}
