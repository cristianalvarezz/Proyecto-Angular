import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { WebSocketService } from '../service/web-socket.service';
import { ChatMensajesDto } from '../models/chatMensajeDto';

@Component({
  selector: 'cf-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit, OnDestroy {

  constructor(public webSocketService: WebSocketService) { }

  ngOnInit(): void {
    this.webSocketService.abrirWebSocket();
  }

  ngOnDestroy(): void {
    this.webSocketService.cerrarWebSocket();
  }

  EnviarMensaje(enviarFormulario: NgForm) {
    const chatMensajeDto = new ChatMensajesDto(enviarFormulario.value.usuario, enviarFormulario.value.mensaje);
    this.webSocketService.enviarMensaje(chatMensajeDto);
    enviarFormulario.controls.mensaje.reset();
  }
}