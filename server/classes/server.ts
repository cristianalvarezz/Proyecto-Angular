//npm install @types/express
import express from "express";
import { SERVER_PORT } from "../global/environment";
import socketIO from 'socket.io';
import http from 'http'

//esto por que va a ser lo unico que se exportara de este archivo
export default class Server {
  public app: express.Application;
  public port: number;


  //socket io
  
  public io:socketIO.Server;
  private httpServer:http.Server;

  constructor() {
    this.app = express();
    this.port = SERVER_PORT;

    this.httpServer=new http.Server(this.app);

    //a qui recibe el http server
    this.io=socketIO(this.httpServer);
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
