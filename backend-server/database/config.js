const mongoose = require("mongoose");

//funcion encargada de hacer la conexion
const dbConnection = async () => {

    try{
    
        //esta funcion retorna una promesa
        await mongoose.connect("mongodb+srv://mean_user:VaEF5jzD5NQ4T6Xa@cluster0.k96kk.mongodb.net/hospitaldb", {
          useNewUrlParser: true,
          useUnifiedTopology: true,
          useCreateIndex: true,
        });
        console.log('Base de datos Online')
    }catch(error){
        console.log(error)
        throw new Error('Error a la hora de levantar la base de datos ')
    }

};

module.exports={
    //estoy exportando la base de datos
    dbConnection
}