import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { Producto } from '../models/producto';
import { ProductoService } from '../service/producto.service';
import { ToastrService } from 'ngx-toastr';
import { TokenService } from '../service/token.service';
import { ColumnMode, SelectionType } from '@swimlane/ngx-datatable';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { NuevoProductoComponent } from './nuevo-producto.component';
import { DetalleProductoComponent } from './detalle-producto.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-lista-producto',
  templateUrl: './lista-producto.component.html',
  styleUrls: ['./lista-producto.component.css'],
})
export class ListaProductoComponent implements OnInit {
  productos: Producto[] = [];
  roles!: string[];
  isAdmin = false;
  rows: Producto[] = [];
  selected: any[] = [];
  //Ejemplo
  @ViewChild('editTmpl', { static: true }) editTmpl!: TemplateRef<any>;
  @ViewChild('hdrTpl', { static: true }) hdrTpl!: TemplateRef<any>;
  @ViewChild('detalle', { static: true }) detalle!: TemplateRef<any>;
  @ViewChild('borr', { static: true }) borr!: TemplateRef<any>;
  @ViewChild('editar', { static: true }) editar!: TemplateRef<any>;

  //cada una de las lineas
  columns: any[] = [];
  ColumnMode = ColumnMode;
  //variable para el buscador
  temp: Producto[] = [];

  //Seleccionar 
  SelectionType = SelectionType;

  constructor(
    private productoService: ProductoService,
    private toastr: ToastrService,
    private tokenService: TokenService,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    this.cargarProductos();
    this.roles = this.tokenService.getAuthorities();
    this.roles.forEach((rol) => {
      if (rol === 'ROLE_ADMIN') {
        this.isAdmin = true;
      }
    });
    if (this.isAdmin) {
      this.columns = [
        {
          cellTemplate: this.editTmpl,
          headerTemplate: this.hdrTpl,
          name: 'Id',
        },
        {
          cellTemplate: this.editTmpl,
          headerTemplate: this.hdrTpl,
          name: 'nombre',
        },
        {
          cellTemplate: this.editTmpl,
          headerTemplate: this.hdrTpl,
          name: 'precio',
        },
        {
          cellTemplate: this.detalle,
          headerTemplate: this.hdrTpl,
          name: 'ver',
        },
        {
          cellTemplate: this.borr,
          headerTemplate: this.hdrTpl,
          name: 'borrar',
        },
        {
          cellTemplate: this.editar,
          headerTemplate: this.hdrTpl,
          name: 'editar',
        },
      ];
    } else {
      this.columns = [
        {
          cellTemplate: this.editTmpl,
          headerTemplate: this.hdrTpl,
          name: 'Id',
        },
        {
          cellTemplate: this.editTmpl,
          headerTemplate: this.hdrTpl,
          name: 'nombre',
        },
        {
          cellTemplate: this.editTmpl,
          headerTemplate: this.hdrTpl,
          name: 'precio',
        },
        {
          cellTemplate: this.detalle,
          headerTemplate: this.hdrTpl,
          name: 'ver',
        },
      ];
    }
  }

  cargarProductos(): void {
    this.productoService.lista().subscribe(
      (data) => {
        this.rows = data;
        this.productos = data;
        this.temp = [...data];
      },
      (err) => {
        console.log(err);
      }
    );
  }

  borrar(id: any) {
    Swal.fire({
      title: '¿Está seguro?',
      text: `Está seguro que desea borrar `,
      showConfirmButton: true,
      showCancelButton: true,
    }).then((resp) => {
      if (resp.value) {
        this.productoService.delete(id).subscribe((data) => {
          this.toastr.success('Producto Eliminado', 'OK', {
            timeOut: 1000,
            positionClass: 'toast-top-center',
          });
          this.cargarProductos();
        });
      }
    });
  }
  updateFilter(event: any) {
    const val = event.target.value.toLowerCase();
    // filter our data
    const temp = this.temp.filter(function (d) {
      return d.nombre.toLowerCase().indexOf(val) !== -1 || !val;
    });

    // update the rows
    this.rows = temp;

  }

  crearProducto() {
    const dialogRef = this.dialog.open(NuevoProductoComponent, {
      // ancho de la pantalla
      width: '250px',
    });
  }
  detalleProducto(prod: Producto) {
    const dialogRef = this.dialog.open(DetalleProductoComponent, {
      // ancho de la pantalla
      width: '250px',
      data: { id: prod.id, nombre: prod.nombre, precio: prod.precio },
    });
  }

  //seleccionar producto
 onSelect({selected} : {  selected: any } ) {
    // console.log('Select Event', selected, this.selected);
    this.selected.splice(0, this.selected.length);
    this.selected.push(...selected);
    console.log(selected);  
  }

  // onActivate(event:any) {
  //   console.log('Activate Event', event);
  // }
}
