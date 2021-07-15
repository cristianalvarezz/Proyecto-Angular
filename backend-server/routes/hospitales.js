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
  getHospitales,
  crearHospital,
  actualizarHospital,
  borrarHospital,
} = require("../controllers/hospitales");
//obtener usuarios
router.get("/", validarJWT, getHospitales);
//crear usuario
//el middleware son funciones que siempre se van a ejecutar
router.post(
  "/",
  [
    validarJWT,
    check("nombre", "nombre obligatorio").not().isEmpty(),
    validarCampos,
  ],
  crearHospital
);
//actualizar usuario
router.put(
  "/:id",
  [
    validarJWT,
    check("nombre", "nombre obligatorio").not().isEmpty(),
    validarCampos,
  ],
  actualizarHospital
);
//borrar
router.delete("/:id",validarJWT, borrarHospital);

module.exports = router;
