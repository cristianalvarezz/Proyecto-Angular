// rutal '/api/hospitales'

const { Router } = require("express");

//importo el paquete  de validaciones
const { check } = require("express-validator");
//importo validaciones
const { validarCampos } = require("../middlewares/validar-campos");
//calidar token
const { validarJWT } = require("../middlewares/validar-jwt");

const router = Router();
const {
  getMedicos,
  crearMedicos,
  actualizarMedicos,
  borrarMedicos,
  getMedicoById
} = require("../controllers/medicos");
//obtener usuarios
router.get("/", validarJWT, getMedicos);
//crear usuario
//el middleware son funciones que siempre se van a ejecutar
router.post(
  "/",
  [
    validarJWT,
    check("nombre", "el nombre es requerido").not().isEmpty(),
    check("hospital", "El hospital id debe de ser valido").isMongoId(),

    validarCampos,
  ],
  crearMedicos
);
//actualizar usuario
router.put(
  "/:id",
  [
    validarJWT,
    check("nombre", "el nombre es requerido").not().isEmpty(),
    validarCampos,
  ],
  actualizarMedicos
);
//borrar
router.delete("/:id", borrarMedicos);

//obtener por id 
router.get( '/:id',
    validarJWT,
    getMedicoById
);
module.exports = router;
