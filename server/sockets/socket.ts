//aqui configuro toda la logica de los socket 

import { Socket } from 'socket.io';
import socketIO from 'socket.io';
import { UsuariosLista } from '../classes/usuarios-lista';
import { Usuario } from '../classes/usuario';

//revisar si el usuario esta desconectado 
export const usuariosConectados =new UsuariosLista();

export const conectarCliente=(cliente:Socket)=>{

    //aqui se agregan todos los usuarios que se van conectando 
    const usuario =new Usuario(cliente.id);
    usuariosConectados.agregar(usuario);
 
}
//me interesa saber la persona que se conecto 
export const desconectar = ( cliente: Socket ) => {
    //escucho al cliente y pregunro si esta desconectado 
    cliente.on('disconnect', () => {
        console.log('Cliente desconectado');
        usuariosConectados.borrarUsuario(cliente.id);
        //desconectar usuario
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
//esto se ejecuta en el momentos de que se realiza la conexion 
export const configurarUsuario = ( cliente: Socket, io: socketIO.Server ) => {

    cliente.on('configurar-usuario',(payload:{nombre:string},callback:Function)=>{
     
        // actualizo el nombre con el nombre puesto en el input
        usuariosConectados.actualizarNombre(cliente.id,payload.nombre)
        callback({
            ok:true,
            mensaje:`Usuario ${payload.nombre },'Configurdo'`
        })
    })

}



