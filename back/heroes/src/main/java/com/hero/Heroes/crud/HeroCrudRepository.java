package com.hero.Heroes.crud;

import com.hero.Heroes.entity.Heroe;
import org.springframework.data.repository.CrudRepository;

import java.util.Optional;

public interface HeroCrudRepository extends CrudRepository<Heroe,Integer> {

}
