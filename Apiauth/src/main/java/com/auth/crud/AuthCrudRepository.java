package com.auth.crud;

import com.auth.entity.Auth;
import org.springframework.data.repository.CrudRepository;

import java.util.Optional;

public interface AuthCrudRepository extends CrudRepository<Auth,Integer> {
    
    Optional<Auth> findByEmail(String email);
    Optional<Auth> findByPasswordAndEmail(String password,String email);

}
