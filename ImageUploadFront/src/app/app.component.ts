import { HttpClient, HttpEventType } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  constructor(private httpClient: HttpClient) { }

  selectedFile!: File;
  retrievedImage: any;
  base64Data: any;
  retrieveResonse: any;
  message!: string;
  imageName: any;

  //Se llama cuando la usuario selecciona una imagen
  public onFileChanged(event:any) {
    //Seleccione Archivo
    this.selectedFile = event.target.files[0];
  }


  //Se llama cuando el usuario hace clic en enviar para cargar la imagen.
  onUpload() {
    console.log(this.selectedFile);
    
    //La API FormData proporciona métodos y propiedades que nos permiten preparar fácilmente los datos del formulario para enviarlos con solicitudes HTTP POST.
    const uploadImageData = new FormData();
    uploadImageData.append('imageFile', this.selectedFile, this.selectedFile.name);
  
    //Haca una llamada a la aplicación Spring Boot para guardar la imagen
    this.httpClient.post('http://localhost:8080/image/upload', uploadImageData, { observe: 'response' })
      .subscribe((response) => {
        if (response.status === 200) {
          this.message = 'Imagen cargada exitosamente';
        } else {
          this.message = 'Imagen no cargada exitosamente';
        }
      }
      );


  }

    //Se llama cuando el usuario hace clic en el botón recuperar imagen para obtener la imagen del back-end.
    getImage() {
    //Hace una llamada a Sprinf Boot para obtener el byte de imagen.
    this.httpClient.get('http://localhost:8080/image/get/' + this.imageName)
      .subscribe(
        res => {
          this.retrieveResonse = res;
          this.base64Data = this.retrieveResonse.picByte;
          this.retrievedImage = 'data:image/jpeg;base64,' + this.base64Data;
        }
      );
  }
}