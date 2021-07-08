/*
    Ruta: /api/usuarios
*/
const { Router } = require('express');

const router = Router();

router.get('/api/usuario', (req,res)=>{
    res.json({
        ok:true,
        //aqui voy a retornar toda la coleccion de usuarios 
        usuarios:[]
    })
});



module.exports = router;