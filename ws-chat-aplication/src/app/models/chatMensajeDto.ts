export class ChatMensajesDto {
    usuario: string;
    mensaje: string;

    constructor(usuario: string, mensaje: string){
        this.usuario = usuario;
        this.mensaje = mensaje;

    }
}