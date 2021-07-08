const express=require('express');
//aqui leo las variables de entorno 
require('dotenv').config();
const { dbConnection } =require('./database/config')
//crear el servidor de express
const app = express();

//Base de datos
dbConnection();
console.log(process.env);
//Rutas
//lo que se solicita y lo que se responde
app.get('/', (req,res)=>{
    res.json({
        ok:true,
        msg:'Hola mundo'
    })
});
app.listen( process.env.PORT ,()=>{
    console.log('Servidor corriendo el puerto '+ process.env.PORT)
})


