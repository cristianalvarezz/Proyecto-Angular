"use strict";
//aqui configuro toda la logica de los socket 
Object.defineProperty(exports, "__esModule", { value: true });
exports.configurarUsuario = exports.mensaje = exports.desconectar = exports.conectarCliente = exports.usuariosConectados = void 0;
const usuarios_lista_1 = require("../classes/usuarios-lista");
const usuario_1 = require("../classes/usuario");
//revisar si el usuario esta desconectado 
exports.usuariosConectados = new usuarios_lista_1.UsuariosLista();
const conectarCliente = (cliente, io) => {
    //aqui se agregan todos los usuarios que se van conectando 
    const usuario = new usuario_1.Usuario(cliente.id);
    exports.usuariosConectados.agregar(usuario);
};
exports.conectarCliente = conectarCliente;
//me interesa saber la persona que se conecto 
const desconectar = (cliente, io) => {
    //escucho al cliente y pregunro si esta desconectado 
    cliente.on('disconnect', () => {
        console.log('Cliente desconectado');
        exports.usuariosConectados.borrarUsuario(cliente.id);
        //desconectar usuario
        //enviare un mensaje a todo el mundo que diga que un usuario se desconecto
        io.emit('usuarios-activos', exports.usuariosConectados.getLista());
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
//esto se ejecuta en el momentos de que se realiza la conexion 
const configurarUsuario = (cliente, io) => {
    cliente.on('configurar-usuario', (payload, callback) => {
        io.emit('usuarios-activos', exports.usuariosConectados.getLista());
        // actualizo el nombre con el nombre puesto en el input
        exports.usuariosConectados.actualizarNombre(cliente.id, payload.nombre);
        callback({
            ok: true,
            mensaje: `Usuario ${payload.nombre},'Configurdo'`
        });
    });
};
exports.configurarUsuario = configurarUsuario;
