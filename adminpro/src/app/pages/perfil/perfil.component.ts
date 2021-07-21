import { Component, OnInit, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { FileUploadService } from '../../services/file-upload.service'
import { UsuarioService } from '../../services/usuario.service';
// import { FileUploadService } from '../../services/file-upload.service';

import { Usuario } from '../../models/usuario.model';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styles: [
  ]
})
export class PerfilComponent implements OnInit {

  public perfilForm!: FormGroup;
  public usuario: Usuario;
  public imagenSubir!: File;
  public imgTemp: any = null;
  public file!:File;



  constructor( private fb: FormBuilder,
               private usuarioService: UsuarioService,
               private fileUploadService: FileUploadService
               ) {
 //obtengo el usuario 
      this.usuario = usuarioService.usuario;
  }

  ngOnInit(): void {

    this.perfilForm = this.fb.group({
      //validaciones 
      nombre: [ this.usuario.nombre , Validators.required ],
      email: [ this.usuario.email, [ Validators.required, Validators.email ] ],
    });

  }

  actualizarPerfil() {
    this.usuarioService.actualizarPerfil( this.perfilForm.value )
        .subscribe( () => {
          //esto para actualizar todo en automatico
          const { nombre, email } = this.perfilForm.value;
          this.usuario.nombre = nombre;
          this.usuario.email = email;

          Swal.fire('Guardado', 'Cambios fueron guardados', 'success');
        }, (err:any) => {
          Swal.fire('Error', err.error.msg, 'error');
        });
  }


  cambiarImagen( EventEmitter:any ) {
     
  
    this.file=EventEmitter.target.files[0]
    this.imagenSubir = this.file;

    if ( !this.file ) { 
      return this.imgTemp = null;
    }

    const reader = new FileReader();
    reader.readAsDataURL( this.file );

    reader.onloadend = () => {
      this.imgTemp = reader.result;
    }
    return

  }

  subirImagen() {

    if(this.usuario.uid){
      this.fileUploadService
      .actualizarFoto( this.imagenSubir, 'usuarios', this.usuario.uid )
      .then( img => {
        this.usuario.img = img;
        Swal.fire('Guardado', 'Imagen de usuario actualizada', 'success');
      }).catch( err => {
        console.log(err);
        Swal.fire('Error', 'No se pudo subir la imagen', 'error');
      })
    }
  }

}