"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//npm install @types/express
const express_1 = __importDefault(require("express"));
const environment_1 = require("../global/environment");
//esto por que va a ser lo unico que se exportara de este archivo
class Server {
    constructor() {
        this.app = express_1.default();
        this.port = environment_1.SERVER_PORT;
    }
    //metodo para levantar servidor
    start(callback) {
        this.app.listen(this.port, callback);
    }
}
exports.default = Server;
