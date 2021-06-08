import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidadoresService } from 'src/app/services/validadores.service';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css'],
})
export class ReactiveComponent implements OnInit {
  forma!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private validadores: ValidadoresService
  ) {
    this.crearFormulario();
    this.cargarDataAlFormulario();
  }

  ngOnInit(): void {}

  crearFormulario() {
    this.forma = this.fb.group(
      {
        //validadores sincronos son valores que no requieren interaccion con servidor
        //los asincronos si
        nombre: ['', [Validators.required, Validators.minLength(5)]],
        apellido: ['', [Validators.required, this.validadores.noHerrera]],
        correo: [
          '',
          [
            Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$'),
            Validators.required,
          ],
        ],
        //si quiero un validador asincrono lo pongo de tercero
        usuario:['', , this.validadores.existeUsuario],
        pass1: ['', Validators.required],
        pass2: ['', Validators.required],
        direccion: this.fb.group({
          distrito: ['', Validators.required],
          ciudad: ['', Validators.required],
        }),
        pasatiempos: this.fb.array([]),
      },
      {
        validators: this.validadores.passwordsIguales('pass1','pass2'),
      }
    );
  }

  agregarpasatiempo() {
    this.pasatiempos.push(this.fb.control('Nuevo elemento'));
  }
  borrarpasatiempo(i: number) {
    this.pasatiempos.removeAt(i);
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
    //es una manera de cargar el formulario dinamico nada mas
    ['comer', 'dormir'].forEach((valor) =>
      this.pasatiempos.push(this.fb.control(valor))
    );
  }

  //validaciones
  //esto va hacer un return de el arreglo de pasatiempos
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

    //si el pass 1 es exactamente igual es falso si no verdadero
    return pass1 === pass2 ? false : true;
  }
}
