const { response } = require("express");
const Usuario = require("../models/usuario");
const Medico = require("../models/medico");
const Hospital = require("../models/hospital");
// getTodo

const getTodo = async (req, res = response) => {
  const busqueda = req.params.busqueda;
  //uso la exprecion regular para que me traiga los resultados aproximados
  const regex = new RegExp(busqueda, "i");

  const [usuarios, medicos, hospitales] = Promise.all([
    Usuario.find({ nombre: regex }),
    Medico.find({ nombre: regex }),
    Hospital.find({ nombre: regex }),
  ]);

  res.json({
    ok: true,
    usuarios,
    medicos,
    hospitales,
  });
};

module.exports = {
  getTodo,
};
