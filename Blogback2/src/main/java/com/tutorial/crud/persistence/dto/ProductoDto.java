package com.tutorial.crud.persistence.dto;

import com.tutorial.crud.persistence.entity.Categoria;

import javax.validation.constraints.Min;
import javax.validation.constraints.NotBlank;

public class ProductoDto {

    private Integer idProducto;

    @NotBlank
    private String nombre;
    @Min(0)
    private Float precioVenta;

    @NotBlank
    @Min(0)
    private Integer idCategoria;

    @NotBlank
    private String codigoBarras;

    @NotBlank
    @Min(0)
    private Integer cantidadStock;

    @NotBlank
    @Min(0)
    private Boolean estado;

    private Categoria categoria;

    public ProductoDto() {
    }

    public ProductoDto(@NotBlank String nombre, @Min(0) Float precioVenta) {
        this.nombre = nombre;
        this.precioVenta = precioVenta;
    }

    public ProductoDto(@NotBlank String nombre,
                       @NotBlank @Min(0) Integer idCategoria,
                       @NotBlank String codigoBarras,
                       @Min(0) Float precio,
                       @NotBlank @Min(0) Integer cantidadStock,
                       @NotBlank
                       @Min(0) Integer estado ) {
        this.nombre = nombre;
        this.precioVenta = precioVenta;
        this.idCategoria = idCategoria;
        this.codigoBarras = codigoBarras;
        this.cantidadStock = cantidadStock;
    }

    public ProductoDto(Integer idProducto, String nombre, Categoria categoria, String codigoBarras, Float precio, Integer cantidadStock, boolean estado) {
        this.idProducto=idProducto;
        this.nombre = nombre;
        this.categoria=categoria;
        this.codigoBarras = codigoBarras;
        this.precioVenta= precioVenta;
        this.cantidadStock = cantidadStock;
        this.estado = estado;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public Float getPrecioVenta() {
        return precioVenta;
    }

    public void setPrecioVenta(Float precioVenta) {
        this.precioVenta = precioVenta;
    }

    public Integer getIdCategoria() {
        return idCategoria;
    }

    public void setIdCategoria(Integer idCategoria) {
        this.idCategoria = idCategoria;
    }

    public String getCodigoBarras() {
        return codigoBarras;
    }

    public void setCodigoBarras(String codigoBarras) {
        this.codigoBarras = codigoBarras;
    }

    public Integer getCantidadStock() {
        return cantidadStock;
    }

    public void setCantidadStock(Integer cantidadStock) {
        this.cantidadStock = cantidadStock;
    }

    public Boolean getEstado() {
        return estado;
    }

    public void setEstado(Boolean estado) {
        this.estado = estado;
    }

    public Integer getIdProducto() {
        return idProducto;
    }

    public void setIdProducto(Integer idProducto) {
        this.idProducto = idProducto;
    }

    public Categoria getCategoria() {
        return categoria;
    }

    public void setCategoria(Categoria categoria) {
        this.categoria = categoria;
    }
}
