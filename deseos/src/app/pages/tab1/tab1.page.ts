import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DeseosService } from 'src/app/services/deseos.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  listas: any[] = [];
  constructor(public deseosService: DeseosService, private router: Router) {
    this.listas = this.deseosService.listas;
  }

  agregarLista(){
    this.router.navigateByUrl('/tabs/agregar');
  }
}
