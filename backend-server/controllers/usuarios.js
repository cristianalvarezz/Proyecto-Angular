
//tener la auidas de auto completado
const { response } = require("express");
//traigo los modelos
const Usuario = require("../models/usuario");

//aqui atrapo el resultado de la validacion 


const getUsuarios = async (req, res) => {
  //obtener todos los usuarios
  //a si especifico los campos
  //const usuarios = await Usuario.find({},'nombre');

  const usuarios = await Usuario.find({}, "nombre email role google");
  res.json({
    ok: true,
    //aqui voy a retornar toda la coleccion de usuarios
    usuarios,
  });
};

const crearUsuario = async (req, res = response) => {
  //en la req viene lo que la persona esta solicitando
  // console.log(req.body);

  //paso los atributos aqui
  const { email, password, nombre } = req.body;

  

  try {
      //validar un correo 
      //busco si el email ya esta y esto es una promesa 
    const exiteEmail = await Usuario.findOne({email})

    if( exiteEmail ){
        //en caso de que el correo ya este registrado me devuelve esto 
        return res.status(400).json({
            ok:false,
            msg:'El correo ya esta registrado'
        })

    }
    //lo paso al modelo del usuario
    const usuario = new Usuario(req.body);

    //necesito esperar a que esta promesa termine antes de continuar con las siguientes lineas de codigo
    await usuario.save();

    res.json({
      ok: true,
      //aqui voy a retornar toda la coleccion de usuarios
      usuario,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Error inesperado ",
    });
  }
};

//no olvida exportar
module.exports = {
  getUsuarios,
  crearUsuario,
};
