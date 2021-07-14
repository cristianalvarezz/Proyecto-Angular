/** ruta: api/todo/:busqueda*/

const { Router } = require("express");
const { validarJWT } = require("../middlewares/validar-jwt");
const router = Router();
const { getTodo } = require("../controllers/busquedas");

router.get("/:busqueda", validarJWT, getTodo);

module.exports = router;
