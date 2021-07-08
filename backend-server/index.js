const express=require('express');
//aqui leo las variables de entorno 
require('dotenv').config();

const { dbConnection } =require('./database/config')
const cors =require('cors');

//crear el servidor de express
const app = express();


//Configurar CORS

//el use es una funcion que se ejecutara siempre para todas las lineas que siguen hacia abajo  
app.use(cors());

//Base de datos
dbConnection();

//Rutas
//cuando alguien pase por aqui voy a requerir y sera
app.use( '/', require('./routes/usuarios') )
//lo que se solicita y lo que se responde

app.listen( process.env.PORT ,()=>{
    console.log('Servidor corriendo el puerto '+ process.env.PORT)
})


