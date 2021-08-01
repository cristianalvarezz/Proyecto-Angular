import { Injectable } from '@angular/core';
import { WebsocketService } from './websocket.service';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(
    public wsService: WebsocketService
  ) { }

    sendMessage( mensaje: string ) {

      const payload = {
        de: this.wsService.getUsuario().nombre,
        cuerpo: mensaje
      };

      this.wsService.emit('mensaje', payload );

    }

    //aqui obtengo el mensaje
    getMessages() {
      //lo que quiero escuchar es el mensaje nuevo a qui no hare el subscribe
    //aqui defino el evento que estoy escuchando 
      return this.wsService.listen('mensaje-nuevo');
    }

}
