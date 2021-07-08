

const getUsuarios = (req,res)=>{
    res.json({
        ok:true,
        //aqui voy a retornar toda la coleccion de usuarios 
        usuarios:[]
    })
}

module.exports={
    getUsuarios
}