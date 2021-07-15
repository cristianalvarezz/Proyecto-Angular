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

//Lectura y parseo del body 
app.use( express.json() )

//Base de datos
dbConnection();

//directorio publico
//esto lo vera todo el mundo 

app.use(express.static('public'))


// Rutas
app.use( '/api/usuarios', require('./routes/usuarios') );
app.use( '/api/hospitales', require('./routes/hospitales') );
app.use( '/api/medicos', require('./routes/medicos') );
app.use( '/api/login', require('./routes/auth') );
app.use( '/api/todo', require('./routes/busquedas') );
app.use( '/api/upload', require('./routes/uploads') );

//lo que se solicita y lo que se responde

app.listen( process.env.PORT ,()=>{
    console.log('Servidor corriendo el puerto '+ process.env.PORT)
})


