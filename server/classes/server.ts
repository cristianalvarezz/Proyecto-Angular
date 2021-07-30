//npm install @types/express
import express from 'express';
import { SERVER_PORT } from '../global/environment';
import socketIO from 'socket.io';
import http from 'http';

import * as socket from '../sockets/socket';



//esto por que va a ser lo unico que se exportara de este archivo
export default class Server {

    private static _intance: Server;

    public app: express.Application;
    public port: number;

      //socket io
  //aplico el patron singleton para asegurar de que solo exita una unicainstancia
  //en mi clase server
    public io: socketIO.Server;
    private httpServer: http.Server;


    private constructor() {

        this.app = express();
        this.port = SERVER_PORT;

        this.httpServer = new http.Server( this.app );
          //a qui recibe el http server
        this.io = socketIO( this.httpServer );

        this.escucharSockets();
    }

    public static get instance() {
        return this._intance || ( this._intance = new this() );
    }


    private escucharSockets() {
 //para saber cuando una persona se conecta mediante sockets
  //io es nuestro servidor de sockets 
  //on es para escuchar algun evento
  //el cliente es el nuevo dispositivo que se conecta a nuestra conexion con sockets
        console.log('Escuchando conexiones - sockets');

        this.io.on('connection', cliente => {

            console.log('Cliente conectado');

            // Mensajes
            socket.mensaje( cliente, this.io );

            // Desconectar
            socket.desconectar( cliente );         

        });

    }

  //metodo para levantar servidor
    start( callback: Function ) {

        this.httpServer.listen( this.port, callback );

    }

}