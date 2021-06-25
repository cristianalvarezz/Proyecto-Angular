import { Component, OnInit, ViewChild,TemplateRef} from '@angular/core';
import { Producto } from '../models/producto';
import { ProductoService } from '../service/producto.service';
import { ToastrService } from 'ngx-toastr';
import { TokenService } from '../service/token.service';
import { ColumnMode } from '@swimlane/ngx-datatable';


@Component({
  selector: 'app-lista-producto',
  templateUrl: './lista-producto.component.html',
  styleUrls: ['./lista-producto.component.css']
})
export class ListaProductoComponent implements OnInit {

  productos: Producto[] = [];
  roles!: string[];
  isAdmin = false;
  rows :Producto[]=[];

   //Ejemplo
   @ViewChild('editTmpl', { static: true }) editTmpl!: TemplateRef<any>;
   @ViewChild('hdrTpl', { static: true }) hdrTpl!: TemplateRef<any>;
 
   //cada una de las lineas
   columns : any[] = [];
   ColumnMode = ColumnMode;
   //variable para el buscador
   temp :Producto[]=[];
 
  constructor(
    private productoService: ProductoService,
    private toastr: ToastrService,
    private tokenService: TokenService
  ) { }

  ngOnInit() {
    this.cargarProductos();
    this.roles = this.tokenService.getAuthorities();
    this.roles.forEach(rol => {
      if (rol === 'ROLE_ADMIN') {
        this.isAdmin = true;
      }
    });
    this.columns = [
      {
        cellTemplate: this.editTmpl,
        headerTemplate: this.hdrTpl,
        name: 'Id'
      },
      {
        cellTemplate: this.editTmpl,
        headerTemplate: this.hdrTpl,
        name: 'nombre'
      },
      {
        cellTemplate: this.editTmpl,
        headerTemplate: this.hdrTpl,
        name: 'precio'
      },   
    ];
 
  }

  cargarProductos(): void {
    this.productoService.lista().subscribe(
      data => {
        this.rows=data;
        this.productos = data;
        this.temp =[...data];
      },
      err => {
        console.log(err);
      }
    );
  }

  borrar(id: any) {
    this.productoService.delete(id).subscribe(
      data => {
        this.toastr.success('Producto Eliminado', 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.cargarProductos();
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 3000, positionClass: 'toast-top-center',
        });
      }
    );
  }
  updateFilter(event:any) {
    const val = event.target.value.toLowerCase();

    // filter our data
    const temp = this.temp.filter(function (d) {
      return d.nombre.toLowerCase().indexOf(val) !== -1 || !val;
    });

    // update the rows
    this.rows = temp;
    // Whenever the filter changes, always go back to the first page
    // this.table.offset = 0;
  }

}
