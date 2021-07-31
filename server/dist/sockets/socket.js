"use strict";
//aqui configuro toda la logica de los socket 
Object.defineProperty(exports, "__esModule", { value: true });
exports.configurarUsuario = exports.mensaje = exports.desconectar = void 0;
//revisar si el usuario esta desconectado 
//me interesa saber la persona que se conecto 
const desconectar = (cliente) => {
    //escucho al cliente y pregunro si esta desconectado 
    cliente.on('disconnect', () => {
        console.log('Cliente desconectado');
    });
};
exports.desconectar = desconectar;
// Escuchar mensajes
const mensaje = (cliente, io) => {
    cliente.on('mensaje', (payload) => {
        console.log('Mensaje recibido', payload);
        //a si se llamara el evento que quiero recibir y emitir desde angular
        io.emit('mensaje-nuevo', payload);
    });
};
exports.mensaje = mensaje;
const configurarUsuario = (cliente, io) => {
    cliente.on('configurar-usuario', (payload) => {
        console.log('Configurandoo usuario', payload);
        return payload;
    });
};
exports.configurarUsuario = configurarUsuario;
