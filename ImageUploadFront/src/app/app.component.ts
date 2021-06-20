import { HttpClient, HttpEventType } from '@angular/common/http';
import { Component } from '@angular/core';
import { ImagenService } from './service/imagen.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(
    private imageservice: ImagenService
  ) {}

  selectedFile!: File;
  retrievedImage: any;
  base64Data: any;
  retrieveResonse: any;
  message!: string;
  imageName: any;

  //Se llama cuando la usuario selecciona una imagen
  public onFileChanged(event: any) {
    //Seleccione Archivo
    this.selectedFile = event.target.files[0];
  }

  //La API FormData proporciona métodos y propiedades que nos permiten preparar fácilmente los datos del formulario para enviarlos con solicitudes HTTP POST.
  subirImagen() {
    const uploadImageData = new FormData();
    uploadImageData.append(
      'imageFile',
      this.selectedFile,
      this.selectedFile.name
    );
    //Haca una llamada a la aplicación Spring Boot para guardar la imagen
    this.imageservice.subirImagen(uploadImageData).subscribe((response) => {
      if (response.status === 200) {
        this.message = 'Imagen cargada exitosamente';
      } else {
        this.message = 'Imagen no cargada exitosamente';
      }
    });
  }

   //Se llama cuando el usuario hace clic en el botón recuperar imagen para obtener la imagen del back-end.
  obtenerImagenPorNombre() {
        //Hace una llamada a Sprinf Boot para obtener el byte de imagen.
    this.imageservice.obtenerImagen(this.imageName).subscribe((res) => {
      console.log(res);
      this.retrieveResonse = res;
      this.base64Data = this.retrieveResonse.picByte;
      this.retrievedImage = 'data:image/jpeg;base64,' + this.base64Data;
    });
  }
}
