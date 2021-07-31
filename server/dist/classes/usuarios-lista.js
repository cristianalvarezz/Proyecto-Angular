"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuariosLista = void 0;
class UsuariosLista {
    constructor() {
        this.lista = [];
    }
    agregar(usuario) {
        this.lista.push(usuario);
        //aqui imprimo todos los usuarios que estna conectados 
        console.log(this.lista);
        return usuario;
    }
    actualizarNombre(id, nombre) {
        for (let usuario of this.lista) {
            if (usuario.id === id) {
                usuario.nombre = nombre;
                break;
            }
        }
        console.log('===== Actualizando usuario ====');
        console.log(this.lista);
    }
    //Obtener lista de usuarios
    getLista() {
        return this.lista;
    }
    getUsuario(id) {
        //obtengo el usuario pedido 
        return this.lista.find((usuario) => usuario.id === id);
    }
    //obtener usuarios en una sala en particular 
    getUsuariosEnSala(sala) {
        //si quiero el usuario de alguna sala en particular
        return this.lista.filter(usuario => usuario.sala === sala);
    }
    //borrar usuario de la comunicacionde sockets
    borrarUsuario(id) {
        const tempUsuario = this.getUsuario(id);
        //me devolvera una nueva lista con todos los usuarios menos el usuario del id que estoy borrando 
        this.lista = this.lista.filter(usuario => usuario.id !== id);
        // console.log(this.lista);
        return tempUsuario;
    }
}
exports.UsuariosLista = UsuariosLista;
