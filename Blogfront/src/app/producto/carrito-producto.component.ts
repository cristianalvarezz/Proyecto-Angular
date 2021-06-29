import {
  Component,
  OnInit,
  Input,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { Producto } from '../models/producto';
import { ProductoService } from '../service/producto.service';
import { id } from '../../../projects/swimlane/ngx-datatable/src/lib/utils/id';
import { ColumnMode } from '@swimlane/ngx-datatable';
import { Router } from '@angular/router';
import { TokenService } from '../service/token.service';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-carrito-producto',
  templateUrl: './carrito-producto.component.html',
  styleUrls: ['./carrito-producto.component.css'],
})
export class CarritoProductoComponent implements OnInit {
  productos: any[];
  columns: any[] = [];
  ColumnMode = ColumnMode;
  enableSummary = true;

  summaryPosition = 'bottom';

  @ViewChild('detalle', { static: true }) detalle!: TemplateRef<any>;
  constructor(
    public productoService: ProductoService,
    public authService: AuthService,
    public router: Router,
    private tokenService: TokenService
  ) {
    this.productos = JSON.parse(localStorage.getItem('productosElegi') || '');

    this.columns = [
      { name: 'Id', summaryFunc: null },
      { name: 'nombre' },
      { prop: 'precio', summaryFunc: (cells: any) => this.avgAge(cells) },
    ];
  }

  ngOnInit(): void {
    console.log(this.productos);
  }

  guardarStorage() {
    //transformo el arreglo de marcadores en un json
    localStorage.setItem('productosElegi', JSON.stringify(this.productos));
  }

  private avgAge(cells: number[]): number {
    console.log(cells);
    const filteredCells = cells.filter((cell) => !!cell);
    return filteredCells.reduce((sum, cell) => (sum += cell), 0);
  }

  onPositionSelectChange($event: Event) {
    const target = $event.target as HTMLSelectElement;
    this.summaryPosition = target.value;
  }
  volver() {
    this.productos = [];
    this.guardarStorage();
    this.router.navigateByUrl('lista');
  }
  realizarcompra() {
    console.log(this.productos);
    console.log(this.tokenService.getUserName());
    this.authService
      .traerUsuario(this.tokenService.getUserName(),this.productos)
      .subscribe((datos) => {
        console.log(datos);
      });
  }
}
