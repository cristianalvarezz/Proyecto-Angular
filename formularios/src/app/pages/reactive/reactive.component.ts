import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css'],
})
export class ReactiveComponent implements OnInit {
  forma!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.crearFormulario();
    this.cargarDataAlFormulario();
  }

  ngOnInit(): void {}

  crearFormulario() {
    this.forma = this.fb.group({
      //validadores sincronos son valores que no requieren interaccion con servidor
      //los asincronos si
      nombre: ['', [Validators.required, Validators.minLength(5)]],
      apellido: ['', Validators.required],
      correo: [
        '',
        [
          Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$'),
          Validators.required,
        ],
      ],
      direccion: this.fb.group({
        distrito: ['', Validators.required],
        ciudad: ['', Validators.required],
      }),
    });
  }
  guardar() {
    console.log(this.forma);
    if (this.forma.invalid) {
      return Object.values(this.forma.controls).forEach((control) => {
        //En caso de que dentro del formulario haya un form group hago reviso se control tiene una instancia 
        if (control instanceof FormGroup) {
          Object.values(control.controls).forEach((control) =>
            control.markAsTouched()
          );
        } else {
          control.markAsTouched();
        }
      });
    }
    // Posteo de información
    this.forma.reset({
      nombre: 'Sin nombre',
    });
  }

  //validaciones
  get pasatiempos() {
    return this.forma.get('pasatiempos') as FormArray;
  }

  get nombreNoValido() {
    return (
      this.forma.get('nombre')?.invalid && this.forma.get('nombre')?.touched
    );
  }

  get apellidoNoValido() {
    return (
      this.forma.get('apellido')?.invalid && this.forma.get('apellido')?.touched
    );
  }

  get correoNoValido() {
    return (
      this.forma.get('correo')?.invalid && this.forma.get('correo')?.touched
    );
  }

  get usuarioNoValido() {
    return (
      this.forma.get('usuario')?.invalid && this.forma.get('usuario')?.touched
    );
  }

  get distritoNoValido() {
    return (
      this.forma.get('direccion.distrito')?.invalid &&
      this.forma.get('direccion.distrito')?.touched
    );
  }

  get ciudadNoValido() {
    return (
      this.forma.get('direccion.ciudad')?.invalid &&
      this.forma.get('direccion.ciudad')?.touched
    );
  }

  get pass1NoValido() {
    return this.forma.get('pass1')?.invalid && this.forma.get('pass1')?.touched;
  }

  get pass2NoValido() {
    const pass1 = this.forma.get('pass1')?.value;
    const pass2 = this.forma.get('pass2')?.value;

    return pass1 === pass2 ? false : true;
  }
  cargarDataAlFormulario() {
    // this.forma.setValue({
    this.forma.reset({
      nombre: 'Christian  ',
      apellido: 'Alvarez',
      correo: 'bertel@gmail.com',
      // pass1: '123',
      // pass2: '123',
      direccion: {
        distrito: 'Ontario',
        ciudad: 'Ottawa',
      },
    });
  }
}
