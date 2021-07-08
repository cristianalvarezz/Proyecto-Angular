/*
    Ruta: /api/usuarios
*/
const { Router } = require("express");
const { getUsuarios, crearUsuario } = require("../controllers/usuarios");
//importo el paquete  de validaciones 
const {check} = require('express-validator')
const router = Router();

//obtener usuarios
router.get("/", getUsuarios);

//crear usuario
//el middleware son funciones que siempre se van a ejecutar
router.post(
  "/",
  [
    //son varios middle  a ocupar
    //estos campos no pueden estar vacios 
    check('nombre','nombre obligatorio').not().isEmpty(),
    check('password','password obligatorio').not().isEmpty(),
    check('email','email obligatorio').isEmail(),
  ],
  crearUsuario
);

module.exports = router;
