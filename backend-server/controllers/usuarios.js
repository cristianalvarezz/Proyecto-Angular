
//traigo los modelos 
const Usuario = require('../models/usuario');

const getUsuarios = (req,res)=>{
    res.json({
        ok:true,
        //aqui voy a retornar toda la coleccion de usuarios 
        msg:'get Usuario'
    })
}


const crearUsuario = async(req,res)=>{
//en la req viene lo que la persona esta solicitando 
    // console.log(req.body);   
    
    //paso los atributos aqui 
    const{email,password,nombre} = req.body;

    //lo paso al modelo del usuario 
    const usuario =new Usuario(req.body);

    //necesito esperar a que esta promesa termine antes de continuar con las siguientes lineas de codigo 
    await usuario.save();

    
    res.json({
        ok:true,
        //aqui voy a retornar toda la coleccion de usuarios 
       usuario
    })
}

//no olvida exportar
module.exports={
    getUsuarios,
    crearUsuario 
}