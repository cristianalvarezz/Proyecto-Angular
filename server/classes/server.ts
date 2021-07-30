//npm install @types/express
import express from "express";
import { SERVER_PORT } from "../global/environment";
import socketIO from 'socket.io';
import http from 'http'

//esto por que va a ser lo unico que se exportara de este archivo
export default class Server {

  private static _intance:Server;

  public app: express.Application;
  public port: number;


  //socket io
  //aplico el patron singleton para asegurar de que solo exita una unicainstancia
  //en mi clase server
  public io:socketIO.Server;
  private httpServer:http.Server;

  private constructor() {
    this.app = express();
    this.port = SERVER_PORT;

    this.httpServer=new http.Server(this.app);

    //a qui recibe el http server
    this.io=socketIO(this.httpServer);
    this.escucharSokets();
  }

  //nueva instancia 
  public static get instance(){
    //si ya existe una instancia regrese esa instancia
    //si no existe y es la primera ves si no crea una nueva instancia 
      return this._intance || (this._intance=new this());
  }


  private escucharSokets(){
    console.log("EScuchando conexiones -sockets");

    //para saber cuando una persona se conecta mediante sockets
  //io es nuestro servidor de sockets 
  //on es para escuchar algun evento
  //el cliente es el nuevo dispositivo que se conecta a nuestra conexion con sockets
    this.io.on('connection',cliente=>{
      console.log('Cliente conectado')
    })
  }
  //metodo para levantar servidor
  start(callback:any) {
    this.httpServer.listen(this.port, callback);
  }
}
