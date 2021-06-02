import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, IonList } from '@ionic/angular';
import { Lista } from 'src/app/models/lista.model';
import { DeseosService } from 'src/app/services/deseos.service';

@Component({
  selector: 'app-listas',
  templateUrl: './listas.component.html',
  styleUrls: ['./listas.component.scss'],
})
export class ListasComponent implements OnInit {
  listas: any[] = [];
  @Input()
  terminada = true;

  @ViewChild(IonList) lista: IonList;
  constructor(private router: Router, public deseosService: DeseosService,private alertCtrl:AlertController) {
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
  async editarLista(lista: Lista) {
    const alert = await this.alertCtrl.create({
      header: 'Editar Lista',
      inputs: [
        {
          name: 'titulo',
          type: 'text',
          value: lista.titulo,
          placeholder: 'Nombre de la lista ',
        },
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('Cancelar');
            this.lista.closeSlidingItems();
          },
        },
        {
          text: 'Actualizar',
          handler: (data) => {
            console.log(data);
            if (data.titulo.length === 0) {
              return;
            }
            lista.titulo=data.titulo;
            this.deseosService.guardaStorage();
            this.lista.closeSlidingItems();
          },
        },
      ],
    });

    alert.present();
  }
}
