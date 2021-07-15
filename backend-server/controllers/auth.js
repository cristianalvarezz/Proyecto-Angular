const { response } = require("express");
const bcrypt = require("bcryptjs");

const Usuario = require("../models/usuario");
const { generarJWT } = require("../helpers/jwt");
const { googleVerify } = require("../helpers/google-verify");

const login = async (req, res = response) => {
  //atrapo el email y password
  const { email, password } = req.body;

  try {
    // Verificar email
    const usuarioDB = await Usuario.findOne({ email });

    if (!usuarioDB) {
      return res.status(404).json({
        ok: false,
        msg: "Email no encontrado",
      });
    }

    // Verificar contraseña
    const validPassword = bcrypt.compareSync(password, usuarioDB.password);
    if (!validPassword) {
      return res.status(400).json({
        ok: false,
        msg: "Contraseña no válida",
      });
    }

    // Generar el TOKEN - JWT
    const token = await generarJWT(usuarioDB.id);

    res.json({
      ok: true,
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Hable con el administrador",
    });
  }
};

const googleSignIn = async (req, res = response) => {
  //recibo el token donde obtendre un email, un nombre y una imagen 
    const googleToken = req.body.token;
    //el await es para que se espere antes de hacer cualquier cosa 
    
    try {
    //con esto podre mandar el token verificarlo y recuperar email,nombre y imagen 
   const{name,email,picture} =  await googleVerify(googleToken);
    res.json({
      ok: true,
      msg: "Google Signin",
      name,email,picture
    });
  } catch (error) {
    res.status(401).json({
      ok: false,
      msg: "token no es correcto  ",
   
    });
  }
};

module.exports = {
  login,
  googleSignIn,
};
