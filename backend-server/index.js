const express=require('express');
const { dbConnection } =require('./database/config')
//crear el servidor de express
const app = express();

//Base de datos
dbConnection();

//Rutas
//lo que se solicita y lo que se responde
app.get('/', (req,res)=>{
    res.json({
        ok:true,
        msg:'Hola mundo'
    })
});
app.listen( 3000 ,()=>{
    console.log('Servidor corriendo el puerto ', 3000)
})


