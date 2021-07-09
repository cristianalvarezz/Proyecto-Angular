const jwt = require('jsonwebtoken');



const validarJWT = (req, res, next) => {

    // Leer el Token
    const token = req.header('x-token');

    //verifico el token en este punto 
    if ( !token ) {
        return res.status(401).json({
            ok: false,
            msg: 'No hay token en la petición'
        });
    }

    //verifico el json web token 
    try {
        //esto intentara comprboar el ide con el token y la firma 
        const { uid } = jwt.verify( token, process.env.JWT_SECRET );
        req.uid = uid;

        next();

    } catch (error) {
        return res.status(401).json({
            ok: false,
            msg: 'Token no válido'
        });
    }
 
}


module.exports = {
    validarJWT
}