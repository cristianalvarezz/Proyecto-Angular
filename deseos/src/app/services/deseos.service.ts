import { Injectable } from '@angular/core';
import { Lista } from '../models/lista.model';

@Injectable({
  providedIn: 'root',
})
export class DeseosService {
  //listas de las tareas
  listas: Lista[] = [];

  constructor() {
    //creo dos listas para purbeas
    const lista1 = new Lista('Recoletar piedras de infinito');
    const lista2 = new Lista('Heroes a desaparecer');
    //mando todos los elementos que quiero agregar
    this.listas.push(lista1, lista2);
 
  }
}
