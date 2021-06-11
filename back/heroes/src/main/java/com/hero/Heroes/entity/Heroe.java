package com.hero.Heroes.entity;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(name ="heroes")
public class Heroe {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    
    @Column(name = "nombre")
    private String nombre;
    
    @Column(name = "poder")
    private  String poder;
    
    @Column(name = "vivo")
    private boolean vivo;

    public Heroe() {

    }

    public Heroe(String nombre, String poder,boolean vivo) {
        this.nombre = nombre;
        this.poder = poder;
        this.vivo = vivo;
    }

    public Heroe(Integer id, String nombre, String poder,boolean vivo) {
        this.id = id;
        this.nombre = nombre;
        this.poder = poder;
        this.vivo = vivo;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getPoder() {
        return poder;
    }

    public void setPoder(String poder) {
        this.poder = poder;
    }

    public boolean isVivo() {
        return vivo;
    }

    public void setVivo(boolean vivo) {
        this.vivo = vivo;
    }
    
}
