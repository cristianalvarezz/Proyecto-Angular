import { Component, OnInit } from '@angular/core';
import { FileUploadService } from 'src/app/services/file-upload.service';
import { ModalImagenService } from '../../services/modal-imagen.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-modal-imagen',
  templateUrl: './modal-imagen.component.html',
  
})
export class ModalImagenComponent implements OnInit {

  public imagenSubir!: File;
  public imgTemp: any = null;
  public file!:File;

  constructor(public modalImagenService:ModalImagenService, public fileUploadService: FileUploadService) { }

  ngOnInit(): void {
  }

  cerrarModal(){

    this.imgTemp=null;
    this.modalImagenService.cerrarModal();
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

    const id   = this.modalImagenService.id;
    const tipo = this.modalImagenService.tipo;

    this.fileUploadService
      .actualizarFoto( this.imagenSubir, tipo, id )
      .then( img => {
        Swal.fire('Guardado', 'Imagen de usuario actualizada', 'success');

        //esto para actualizar la imagen 
        this.modalImagenService.nuevaImagen.emit(img);

        this.cerrarModal();
      }).catch( err => {
        console.log(err);
        Swal.fire('Error', 'No se pudo subir la imagen', 'error');
      })

  }

}
