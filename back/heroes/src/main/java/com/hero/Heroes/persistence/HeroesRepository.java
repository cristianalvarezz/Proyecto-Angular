/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.hero.Heroes.persistence;

import com.hero.Heroes.crud.HeroCrudRepository;
import com.hero.Heroes.entity.Heroe;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public class HeroesRepository {

    @Autowired
    private HeroCrudRepository heroCrudRepository;

    public List<Heroe> obtenerTodo(){
        return (List<Heroe>) heroCrudRepository.findAll();
    }

    public Heroe guardar(Heroe heroe){
        return heroCrudRepository.save(heroe);
    }


    public void borrar(Integer id){
        heroCrudRepository.deleteById(id);
    }

    public Optional<Heroe> obtenerHeroe(int id){
        Optional<Heroe> Hero = heroCrudRepository.findById(id);
        return Hero;
    }

    public Heroe editar(Heroe heroe){
        return heroCrudRepository.save(heroe);
    }





}
