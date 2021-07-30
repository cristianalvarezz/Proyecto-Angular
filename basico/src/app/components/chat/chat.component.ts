import { Component, OnInit, OnDestroy } from '@angular/core';
import { ChatService } from '../../services/chat.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit, OnDestroy {

  texto = '';
  mensajesSubscription!: Subscription;
  elemento!: any;

  mensajes: any[] = [];



  constructor(
    public chatService: ChatService
  ) { }

  ngOnInit() {

  
    this.elemento = document.getElementById('chat-mensajes');

    //aqui finalmente recibo el mensaje 
    this.mensajesSubscription = this.chatService.getMessages().subscribe( msg => {

      //esto para agregar al arreglo un nuevo mensaje 
      this.mensajes.push( msg );

      //necesito esperaar a que se renderise 
      setTimeout(() => {
        //necesito usar el elemento y mover el viewport
        this.elemento.scrollTop = this.elemento.scrollHeight;
      }, 50);

    });

  }

  ngOnDestroy() {
    //esto para que cuando el usuario se desconecte se destruya la conexion
    this.mensajesSubscription.unsubscribe();
  }


  enviar() {

    if ( this.texto.trim().length === 0 ) {
      return;
    }

    this.chatService.sendMessage( this.texto );
    this.texto = '';
  }

}

