package com.tutorial.crud.persistence.repository;


import com.tutorial.crud.persistence.entity.Compra;
import org.springframework.data.repository.CrudRepository;

import java.util.List;
import java.util.Optional;

public interface CompraCrudRepository extends CrudRepository<Compra, Integer> {
    List<Compra> getAll();

    /*
    Optional<List<Purchase>> getByClient(String clientId);
    */
    Compra save(Compra compra);

}
