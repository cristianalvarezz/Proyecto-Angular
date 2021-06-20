import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ImagenService {
  private url='http://localhost:8080/image';
  constructor(private http: HttpClient) { }

  subirImagen(uploadImageData: FormData){
    return this.http.post(`${this.url}/upload`, uploadImageData, { observe: 'response' });
  }

  obtenerImagen(imageName:any){
    return this.http.get(`${this.url}/get/${imageName}`);
  }
  obtenerTodasLasImagenes(){
    return this.http.get(`${this.url}/get`)
  }
  eliminarImagen(idImage:number){
    return this.http.delete(`${this.url}/delete/${idImage}`)
  }
}
