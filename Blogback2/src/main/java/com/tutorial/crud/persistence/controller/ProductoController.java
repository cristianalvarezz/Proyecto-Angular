package com.tutorial.crud.persistence.controller;
import com.tutorial.crud.persistence.dto.Mensaje;
import com.tutorial.crud.persistence.dto.ProductoDto;
import com.tutorial.crud.persistence.entity.Categoria;
import com.tutorial.crud.persistence.entity.Producto;
import com.tutorial.crud.persistence.service.ProductoService;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/producto")
@CrossOrigin(origins = "http://localhost:4200")
public class ProductoController {

    @Autowired
    ProductoService productoService;

    @GetMapping("/lista")
    public ResponseEntity<List<Producto>> list(){
        List<Producto> list = productoService.list();
        return new ResponseEntity(list, HttpStatus.OK);
    }

    @GetMapping("/detail/{id}")
    public ResponseEntity<Producto> getById(@PathVariable("id") int id){
        Categoria categoria = new Categoria(productoService.getOne(id).get().getCategoria().getIdCategoria(),productoService.getOne(id).get().getCategoria().getDescripcion(),productoService.getOne(id).get().getCategoria().getEstado());

        if(!productoService.existsById(id))
            return new ResponseEntity(new Mensaje("no existe"), HttpStatus.NOT_FOUND);

        Producto producto = new Producto(productoService.getOne(id).get().getIdProducto(),productoService.getOne(id).get().getNombre(),productoService.getOne(id).get().getIdCategoria(),categoria ,
                productoService.getOne(id).get().getCodigoBarras(), productoService.getOne(id).get().getPrecioVenta(),productoService.getOne(id).get().getCantidadStock(),productoService.getOne(id).get().getEstado());
        return new ResponseEntity(producto, HttpStatus.OK);
    }



    @GetMapping("/detailname/{nombre}")
    public ResponseEntity<Producto> getByNombre(@PathVariable("nombre") String nombre){
        Categoria categoria = new Categoria(productoService.getByNombre(nombre).get().getCategoria().getIdCategoria(),productoService.getByNombre(nombre).get().getCategoria().getDescripcion(),productoService.getByNombre(nombre).get().getCategoria().getEstado());

        if(!productoService.existsByNombre(nombre))
            return new ResponseEntity(new Mensaje("no existe"), HttpStatus.NOT_FOUND);
        Producto producto = new Producto(productoService.getByNombre(nombre).get().getIdProducto(),productoService.getByNombre(nombre).get().getNombre(),productoService.getByNombre(nombre).get().getIdCategoria(),categoria ,
                productoService.getByNombre(nombre).get().getCodigoBarras(), productoService.getByNombre(nombre).get().getPrecioVenta(),productoService.getByNombre(nombre).get().getCantidadStock(),productoService.getByNombre(nombre).get().getEstado());

        return new ResponseEntity(producto , HttpStatus.OK);
    }

    @PostMapping("/create")
    public ResponseEntity<?> create(@RequestBody ProductoDto productoDto){
        System.out.println(productoDto.getPrecioVenta());
        if(StringUtils.isBlank(productoDto.getNombre()))
            return new ResponseEntity(new Mensaje("el nombre es obligatorio"), HttpStatus.BAD_REQUEST);
        if(productoDto.getPrecioVenta()==null || productoDto.getPrecioVenta()<0 )
            return new ResponseEntity(new Mensaje("el precio debe ser mayor que 0"), HttpStatus.BAD_REQUEST);
        if(productoService.existsByNombre(productoDto.getNombre()))
            return new ResponseEntity(new Mensaje("ese nombre ya existe"), HttpStatus.BAD_REQUEST);
        Producto producto = new Producto(productoDto.getNombre(),productoDto.getIdCategoria(),productoDto.getCodigoBarras(), productoDto.getPrecioVenta(),productoDto.getCantidadStock(),productoDto.getEstado());
        productoService.save(producto);
        return new ResponseEntity(new Mensaje("producto creado"), HttpStatus.OK);
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<?> update(@PathVariable("id")int id, @RequestBody ProductoDto productoDto){
        System.out.println("Este es el precio "+productoDto.getPrecioVenta());
        if(!productoService.existsById(id))
            return new ResponseEntity(new Mensaje("no existe"), HttpStatus.NOT_FOUND);
        if(productoService.existsByNombre(productoDto.getNombre()) && productoService.getByNombre(productoDto.getNombre()).get().getIdProducto() != id)
            return new ResponseEntity(new Mensaje("ese nombre ya existe"), HttpStatus.BAD_REQUEST);
        if(StringUtils.isBlank(productoDto.getNombre()))
            return new ResponseEntity(new Mensaje("el nombre es obligatorio"), HttpStatus.BAD_REQUEST);

        Categoria categoria = new Categoria(productoService.getOne(id).get().getCategoria().getIdCategoria(),productoService.getOne(id).get().getCategoria().getDescripcion(),productoService.getOne(id).get().getCategoria().getEstado());
        Producto producto = new Producto(productoService.getOne(id).get().getIdProducto(),productoService.getOne(id).get().getNombre(),productoService.getOne(id).get().getIdCategoria(),categoria ,
                productoService.getOne(id).get().getCodigoBarras(), productoService.getOne(id).get().getPrecioVenta(),productoService.getOne(id).get().getCantidadStock(),productoService.getOne(id).get().getEstado());

        producto.setNombre(productoDto.getNombre());
        producto.setIdCategoria(productoDto.getIdCategoria());
        /*
        producto.setCategoria(productoDto.getCategoria());
         */
        producto.setCodigoBarras(productoDto.getCodigoBarras());
        producto.setPrecioVenta(productoDto.getPrecioVenta());
        producto.setCantidadStock(productoDto.getCantidadStock());
        producto.setEstado(productoDto.getEstado());
        productoService.save(producto);
        return new ResponseEntity(new Mensaje("producto actualizado"), HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> delete(@PathVariable("id")int id){
        if(!productoService.existsById(id))
            return new ResponseEntity(new Mensaje("no existe"), HttpStatus.NOT_FOUND);
        productoService.delete(id);
        return new ResponseEntity(new Mensaje("producto eliminado"), HttpStatus.OK);
    }


}
