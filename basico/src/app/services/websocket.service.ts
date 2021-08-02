import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Usuario } from '../classes/usuario';

@Injectable({
  providedIn: 'root',
})
export class WebsocketService {
  public socketStatus = false;
  //con declarar eto ya tengo la comunicacion entre el cliente y el servidor

  public usuario!: Usuario;

  constructor(private socket: Socket) {
    this.cargarStorage();
    this.checkStatus();
  }

  //me interesa saber cuando se conecta y cuando se desconecta del servidor
  checkStatus() {
    this.socket.on('connect', () => {
      console.log('Conectado al servidor');
      this.socketStatus = true;
      this.cargarStorage();
    });

    this.socket.on('disconnect', () => {
      console.log('Desconectado del servidor');
      this.socketStatus = false;
    });
  }

  //el evento que quiero emitir
  //el payload puede que venga puede que no y es la informacion que quiero enviar
  //callback la funcion que quiero ejecutar despues que se realiza este trabajo
  emit(evento: string, payload?: any, callback?: Function) {
    console.log('Emitiendo', evento);
    // emit('EVENTO', payload, callback?)
    //esto es lo que necesito para disparar el evento
    this.socket.emit(evento, payload, callback);
  }

  //este metodo escuchara cualquier evento que emita el servidor
  listen(evento: string) {
    //este evento lo escuchare desde cualquier lado de mi app
    return this.socket.fromEvent(evento);
    // el from event regresa un obcerbable de tipo cualquier cosa
  }

  loginWS(nombre: string) {
   

    //indico que ya termina de una manera
    return new Promise<void>((resolve,reject)=>{

      this.emit('configurar-usuario',{nombre},(resp:any)=>{

        this.usuario=new Usuario(nombre);
        this.guardarStorage();
          resolve();
      })
    });
    // this.socket.emit('configurar-usuario', { nombre }, (resp: any) => {
    //   console.log("Hola",resp)
    // });
  }

  getUsuario(){
    return this.usuario;
  }
  guardarStorage(){
    localStorage.setItem('usuario', JSON.stringify(this.usuario))
  }

  cargarStorage(){

    if(localStorage.getItem('usuario')){

      this.usuario = JSON.parse(localStorage.getItem('usuario')||"")
      this.loginWS(this.usuario.nombre);
    }
  }
}
