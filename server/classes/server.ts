//npm install @types/express
import express from "express";
import { SERVER_PORT } from "../global/environment";

//esto por que va a ser lo unico que se exportara de este archivo
export default class Server {
  public app: express.Application;
  public port: number;

  constructor() {
    this.app = express();
    this.port = SERVER_PORT;
  }

  //metodo para levantar servidor
  start(callback:any) {
    this.app.listen(this.port, callback);
  }
}
