import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Lista } from 'src/app/models/lista.model';
import { DeseosService } from 'src/app/services/deseos.service';

@Component({
  selector: 'app-listas',
  templateUrl: './listas.component.html',
  styleUrls: ['./listas.component.scss'],
})
export class ListasComponent implements OnInit {
  listas: any[] = [];
  constructor(private router: Router, public deseosService: DeseosService) {
    this.listas = this.deseosService.listas;
  }

  ngOnInit() {}
  listaSeleccionada(lista: Lista) {
    this.router.navigateByUrl(`/tabs/agregar/${lista.id}`);
    // console.log(lista)
  }
  borrarLista(lista: Lista) {
    // console.log(lista);
    this.deseosService.borrarLista(lista);
  }
}
