import { Injectable } from '@angular/core';
import { Lista } from '../models/lista.model';

@Injectable({
  providedIn: 'root',
})
export class DeseosService {
  //listas de las tareas
  listas: Lista[] = [];

  constructor() {
    this.cargarStorage();
  }

  crearLista(titulo: any) {
    const nuevaLista = new Lista(titulo);
    this.listas.push(nuevaLista);
    this.guardaStorage();
    return nuevaLista.id;
  }

  obtenerLista(id: string | number) {
    id = Number(id);
    return this.listas.find((listaData) => listaData.id === id);
  }

  guardaStorage() {
    localStorage.setItem('data', JSON.stringify(this.listas));
  }
  cargarStorage() {
    //validar
    if (localStorage.getItem('data')) {
      this.listas = JSON.parse(localStorage.getItem('data'));
    }
  }
}
