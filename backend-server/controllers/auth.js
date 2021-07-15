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
const googleSignIn = async( req, res = response ) => {
  //recibo el token donde obtendre un email, un nombre y una imagen
    const googleToken = req.body.token;

    try {
 //el await es para que se espere antes de hacer cualquier cosa
    //con esto podre mandar el token verificarlo y recuperar email,nombre y imagen
        const { name, email, picture } = await googleVerify( googleToken );
  //verifico si el usuario exite
        const usuarioDB = await Usuario.findOne({ email });
        let usuario;
  //si el usuario no exite
        if ( !usuarioDB ) {
            // si no existe el usuario
            usuario = new Usuario({
                nombre: name,
                email,
                password: '@@@',
                img: picture,
                google: true
            });
        } 
        //si exite el usuario
        else {
            // existe usuario
                //este google true quiere decir que es un usuario registrado con google
            usuario = usuarioDB;
            usuario.google = true;
        }

        // Guardar en DB
        await usuario.save();

        // Generar el TOKEN - JWT
        const token = await generarJWT( usuario.id );
        
        res.json({
            ok: true,
            token
        });

    } catch (error) {
        
        res.status(401).json({
            ok: false,
            msg: 'Token no es correcto',
        });
    }
}
//renovar token 

const renewToken=async(req,res=response)=>{

  const uid=req.uid
  
  // Para generar un nuevo token solo necesito el id del usuario
   const token = await generarJWT( uid );

  res.json({
    

    ok:true,
    uid
  })
}

module.exports = {
  login,
  googleSignIn,
  renewToken
};
