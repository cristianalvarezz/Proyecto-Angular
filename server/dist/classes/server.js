"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//npm install @types/express
const express_1 = __importDefault(require("express"));
const environment_1 = require("../global/environment");
const socket_io_1 = __importDefault(require("socket.io"));
const http_1 = __importDefault(require("http"));
//esto por que va a ser lo unico que se exportara de este archivo
class Server {
    constructor() {
        this.app = express_1.default();
        this.port = environment_1.SERVER_PORT;
        this.httpServer = new http_1.default.Server(this.app);
        //a qui recibe el http server
        this.io = socket_io_1.default(this.httpServer);
    }
    //metodo para levantar servidor
    start(callback) {
        this.httpServer.listen(this.port, callback);
    }
}
exports.default = Server;
