//aqui configuro toda la logica de los socket 

import { Socket } from 'socket.io';
import socketIO from 'socket.io';

//revisar si el usuario esta desconectado 

//me interesa saber la persona que se conecto 
export const desconectar = ( cliente: Socket ) => {
    //escucho al cliente y pregunro si esta desconectado 
    cliente.on('disconnect', () => {
       
        console.log('Cliente desconectado');
    });
}

// Escuchar mensajes
export const mensaje = ( cliente: Socket, io: socketIO.Server ) => {

    cliente.on('mensaje', (  payload: { de: string, cuerpo: string }  ) => {

        console.log('Mensaje recibido', payload );

        //a si se llamara el evento que quiero recibir y emitir desde angular
        io.emit('mensaje-nuevo', payload );

    });

}



