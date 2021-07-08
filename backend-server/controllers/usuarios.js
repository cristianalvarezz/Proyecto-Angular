//tener la auidas de auto completado
const { response } = require("express");
//traigo los modelos
const Usuario = require("../models/usuario");

//importo libreria para encriptar la contraseña
const bcrypt = require("bcryptjs");

const getUsuarios = async (req, res) => {
  //obtener todos los usuarios
  //a si especifico los campos
  //const usuarios = await Usuario.find({},'nombre');

  const usuarios = await Usuario.find({}, "nombre email password role google");
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
    const exiteEmail = await Usuario.findOne({ email });

    if (exiteEmail) {
      //en caso de que el correo ya este registrado me devuelve esto
      return res.status(400).json({
        ok: false,
        msg: "El correo ya esta registrado",
      });
    }
    //lo paso al modelo del usuario
    const usuario = new Usuario(req.body);

    //Encriptar contraseña
    //genero numero de manera aleatoria
    const salt = bcrypt.genSaltSync();
    usuario.password = bcrypt.hashSync(password, salt);

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
//Acutualizar usuario
const actualizarUsuario = async (req, res = response) => {
  const uid = req.params.id;

  try {
    //TODO:Validar token y comprobar si es el usuario correcto

    const usuarioDB = await Usuario.findById(uid);

    if (!usuarioDB) {
      return res.status(404).json({
        ok: false,
        msg: "No existe un usuario por ese id  ",
      });
    }
    const campos = req.body;
    if (usuarioDB.email===req.body.email) {
      //el delete lo utilizo para los campos que no voy a actualizar
      delete campos.email;
    }else{
      //significa que tengo quwe verificar que no exista un uausrio con el mismo correo 
      const existeEmail =await Usuario.findOne({email:req.body.email});
        if(existeEmail){
          return res.status(400).json({
            ok:false,
            msg:'Ya este correo existe'
          })
        }
    }
    //si llego a qui el usuario existe
    //Actualizacion
    delete campos.password;
    delete campos.google;
    //el new true es para que me regrese el nuevo resultado 
    const usuarioActualizado = await Usuario.findByIdAndUpdate(uid, campos,{new: true });
    res.json({
      ok: true,
      usuario: usuarioActualizado,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Error inseperado",
    });
  }
};
//no olvida exportar
module.exports = {
  getUsuarios,
  crearUsuario,
  actualizarUsuario,
};
