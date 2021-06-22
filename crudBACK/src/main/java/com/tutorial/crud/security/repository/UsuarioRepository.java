package com.tutorial.crud.security.repository;

import com.tutorial.crud.security.entity.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository

public interface UsuarioRepository extends JpaRepository<Usuario, Integer> {

    //obtener un usuario apartir del nombre de usuario
    Optional<Usuario> findByNombreUsuario(String nombreUsuario);
    //boolean para comprobar si existe o no exite por nombre
    boolean existsByNombreUsuario(String nombreUsuario);
    //comprobar si existe el email
    boolean existsByEmail(String email);
}
