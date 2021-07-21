import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';


const base_url =environment.base_url;
@Injectable({
  providedIn: 'root'
})
export class FileUploadService {

  constructor() { }

  async actualizarFoto(
    archivo: File,
    tipo: 'usuarios'|'medicos'|'hospitales',
    id: string
  ) {

    try {

      const url = `${ base_url }/upload/${ tipo }/${ id }`;
      const formData = new FormData();
      formData.append('imagen', archivo);

      const resp = await fetch( url, {
        method: 'PUT',
        headers: {
          'x-token': localStorage.getItem('token') || ''
        },
        body: formData
      });

      //veo la respuesta del guardar el archivo 
      const data = await resp.json();

      //toda esta instruccion  retorna el nombre del archivo 
      //si todo salio exitoso
      if ( data.ok ) {
        console.log( data.nombreArchivo);
        return data.nombreArchivo;
      } else {
        console.log(data.msg);
        return false;
      }
      
    } catch (error) {
      console.log(error);
      return false;    
    }

  }
}
