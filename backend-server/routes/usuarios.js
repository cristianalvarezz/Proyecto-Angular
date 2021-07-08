/*
    Ruta: /api/usuarios
*/
const { Router } = require('express');
const { getUsuarios , crearUsuario } = require ('../controllers/usuarios');

const router = Router();

//obtener usuarios
router.get('/', getUsuarios );

//crear usuario
router.post('/', crearUsuario);


module.exports = router;