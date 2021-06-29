package com.tutorial.crud.persistence.entity;

import javax.persistence.*;

@Entity
@Table(name = "productos")
public class Producto {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_producto")
    private Integer idProducto;

    private String nombre;

    @Column(name = "id_categoria")
    private Integer idCategoria;

    @Column(name = "codigo_barras")
    private String codigoBarras;

    @Column(name = "precio_venta")
    private Float precioVenta;

    @Column(name = "cantidad_stock")
    private Integer cantidadStock;

    private Boolean estado;



    public Producto() {
    }




public Producto(Integer idProducto,String nombre,Integer idCategoria,Categoria categoria,  String codigoBarras, Float precio, Integer cantidadStock, boolean estado) {
        this.idProducto=idProducto;
        this.nombre = nombre;
        this.idCategoria=idCategoria;
        this.categoria=categoria;
        this.codigoBarras = codigoBarras;
        this.precioVenta = precio;
        this.cantidadStock = cantidadStock;
        this.estado = estado;
    }

    public Producto(Integer idProducto, String nombre, Integer idCategoria, String codigoBarras, Float precioVenta, Integer cantidadStock, Boolean estado, Categoria categoria) {
        this.idProducto = idProducto;
        this.nombre = nombre;
        this.idCategoria = idCategoria;
        this.codigoBarras = codigoBarras;
        this.precioVenta = precioVenta;
        this.cantidadStock = cantidadStock;
        this.estado = estado;
        this.categoria = categoria;
    }

    public Producto(Categoria categoria) {
        this.categoria = categoria;
    }

    public Producto(String nombre, Integer idCategoria, String codigoBarras, Float precio, Integer cantidadStock, boolean estado) {
        this.nombre = nombre;
        this.idCategoria = idCategoria;
        this.codigoBarras = codigoBarras;
        this.precioVenta = precio;
        this.cantidadStock = cantidadStock;
        this.estado = estado;
    }


    public Float getPrecioVenta() {
        return precioVenta;
    }

    public void setPrecioVenta(Float precioVenta) {
        this.precioVenta = precioVenta;
    }

    @ManyToOne
    @JoinColumn(name = "id_categoria", insertable = false, updatable = false)
    private Categoria categoria;

    public Integer getIdProducto() {
        return idProducto;
    }


    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
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

    public Categoria getCategoria() {
        return categoria;
    }

    public void setCategoria(Categoria categoria) {
        this.categoria = categoria;
    }

    @Override
    public String toString() {
        return "Producto{" +
                "idProducto=" + idProducto +
                ", nombre='" + nombre + '\'' +
                ", idCategoria=" + idCategoria +
                ", codigoBarras='" + codigoBarras + '\'' +
                ", precioVenta=" + precioVenta +
                ", cantidadStock=" + cantidadStock +
                ", estado=" + estado +
                ", categoria=" + categoria +
                '}';
    }
}
