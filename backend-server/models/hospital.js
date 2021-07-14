const { Schema, model } = require('mongoose');


const HospitalSchema = Schema({

    nombre: {
        type: String,
        required: true
    },
    img: {
        type: String,
    },
    //usuario que creo el hspital
    usuario:{
        //esto indicara la relacion entre el hopital y el usuario
        type:Schema.Types.ObjectId,
        ref:'Usuario'
    }
//asi se llamara la base de datos
},{collection:'hospitales'});


//sobre escribo el metodo 
HospitalSchema.method('toJSON', function() {

    //del objeto estraido la version y assword y el resto de las propiedades
  //de esta manera no regresare el password
    const { __v, ...object } = this.toObject();
    return object;
})



module.exports = model( 'Usuario', HospitalSchema );
