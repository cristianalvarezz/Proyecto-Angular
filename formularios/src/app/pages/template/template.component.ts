import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PaisService } from 'src/app/services/pais.service';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css'],
})
export class TemplateComponent implements OnInit {
  usuario = {
    nombre: 'Fernando',
    apellido: 'Herrera',
    correo: 'fernando@gmail.com',
    pais: 'CRI',
    genero: 'M',
  };

  paises: any[] = [];

  constructor(private paisService: PaisService) {}

  ngOnInit(): void {
    this.paisService.getPaises().subscribe((paises) => {
      //console.log(paises);
      this.paises=paises;
      this.paises.unshift({
        nombre: '[ Seleccione Pais]',
        codigo: ''
      })
    });
  }
  //resivo la forma de el html
  guardar(forma: NgForm) {
    console.log(forma);

    //quiere decir que todas las validaciones fueron cumplidas
    if (forma.invalid) {
      //todos los crontroles que tiene la forma
      Object.values(forma.controls).forEach((control) => {
        console.log(forma);
        control.markAsTouched();
      });

      return;
    }

    console.log(forma.value);
  }
}
