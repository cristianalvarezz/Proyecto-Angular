/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.auth.persistence;

import com.auth.entity.Auth;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;
import com.auth.crud.AuthCrudRepository;

@Repository
public class AuthRepository {

    @Autowired
    private AuthCrudRepository authCrudRepository;

    public List<Auth> obtenerTodo(){
        return (List<Auth>) authCrudRepository.findAll();
    }

    public Auth guardar(Auth heroe){
        return authCrudRepository.save(heroe);
    }


    public void borrar(Integer id){
        authCrudRepository.deleteById(id);
    }

    public Optional<Auth> obtenerAuth(int id){
        Optional<Auth> auth = authCrudRepository.findById(id);
        System.out.println(auth);
        return auth;
    }

    public Optional<Auth> obtenerPorEmail(String email){
      Optional<Auth> auth = authCrudRepository.findByEmail(email);
      return auth;
    }

    public Auth editar(Auth auth){
        return authCrudRepository.save(auth);
    }

    public Optional<Auth> obtenerEmailYpassword(String password,  String email){
        return authCrudRepository.findByPasswordAndEmail(password,email);
    }




}
