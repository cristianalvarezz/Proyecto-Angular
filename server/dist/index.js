"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = __importDefault(require("./classes/server"));
const router_1 = __importDefault(require("./routes/router"));
const body_parser_1 = __importDefault(require("body-parser"));
const server = new server_1.default();
//BodyParser
//lo que sea que me posten tomalo y genera un objeto de javascript
server.app.use(body_parser_1.default.urlencoded({
    extended: true
}));
server.app.use(body_parser_1.default.json());
server.app.use('/', router_1.default);
server.start(() => {
    console.log(`servidor corriendo ${server.port}`);
});
