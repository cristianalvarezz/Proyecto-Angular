import Server from "./classes/server";
import router from "./routes/router";

import bodyParser from "body-parser";
import cors from "cors";

const server = new Server.instance;

//BodyParser
//lo que sea que me posten tomalo y genera un objeto de javascript
server.app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
server.app.use(bodyParser.json());

//Rutas de servicios
server.app.use("/", router);

//CORS
server.app.use(cors({ origin: true, credentials: true }));

server.start(() => {
  console.log(`servidor corriendo ${server.port}`);
});
