import { HttpClient, HttpEventType } from '@angular/common/http';
import { Component } from '@angular/core';
import { ImagenService } from './service/imagen.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private imageservice: ImagenService) {
    if (this.imageName != undefined) {
      this.obtenerImagenPorNombre();
    }
  }
  selectedFile!: File;
  retrievedImage: any;
  retrievedImage2: any;
  base64Data: any;
  retrieveResonse: any;

  message!: string;
  imageName: any;
  imagenes: any;
  imagenn: any;
  vector: any[] = [];

  ngOnInit(): void {
    this.obtenerTodasLasImagenes();
  }

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
      // console.log(res);
      this.retrieveResonse = res;
      this.base64Data = this.retrieveResonse.picByte;
      this.retrievedImage = 'data:image/jpeg;base64,' + this.base64Data;
    });
  }
  borrarImagen(id: number, imagen: any) {
    console.log(id);
    console.log(imagen);

    this.imageservice.eliminarImagen(id).subscribe((res) => {
      console.log(res);
    });
  }
  obtenerImagenes(nombre: any) {
    //Hace una llamada a Sprinf Boot para obtener el byte de imagen.

    if (this.imagenn == undefined) {
      this.imagenn = nombre;
      for (let i = 0; i < this.imagenn.length; i++) {
        // console.log(this.imagenn[i].name);
        this.imageservice
          .obtenerImagen(this.imagenn[i].name)
          .subscribe((res) => {
            // console.log(res);
            this.retrieveResonse = res;
            this.base64Data = this.retrieveResonse.picByte;
            this.retrievedImage2 = 'data:image/jpeg;base64,' + this.base64Data;
            // this.vector[i] = {
            //   imagen: this.retrievedImage2,
            //   // id: this.retrieveResonse.id,
            // };
            this.vector[i]=this.retrievedImage2;
            console.log(this.vector);
          });
        //
      }
    }
  }

  obtenerTodasLasImagenes() {
    this.imageservice.obtenerTodasLasImagenes().subscribe((res) => {
      this.imagenes = res;
    });
  }
}
