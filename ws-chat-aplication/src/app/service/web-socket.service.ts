import { Injectable } from '@angular/core';
import {ChatMensajesDto } from '../models/chatMensajeDto';

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {

  webSocket!: WebSocket;
  chatMensajes: ChatMensajesDto[] = [];

  constructor() { }

  public abrirWebSocket(){
    this.webSocket = new WebSocket('ws://localhost:8080/chat');

    this.webSocket.onopen = (event) => {
      console.log('Abrir: ', event);
    };

    this.webSocket.onmessage = (event) => {
      const chatMessageDto = JSON.parse(event.data);
      this.chatMensajes.push(chatMessageDto);
    };

    this.webSocket.onclose = (event) => {
      console.log('Cerrar: ', event);
    };
  }

  public enviarMensaje(chatMessageDto: ChatMensajesDto){
    this.webSocket.send(JSON.stringify(chatMessageDto));
  }

  public cerrarWebSocket() {
    this.webSocket.close();
  }
}