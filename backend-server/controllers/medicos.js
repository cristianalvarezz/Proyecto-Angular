const { response } = require("express");
const Medico =require("../models/medico");

const getMedicos = (req, res = response) => {
  res.json({
    ok: true,
    msg: "getMedicos",
  });
};

const crearMedicos = async(req, res = response) => {
  const uid = req.uid;
  const medico = new Medico({
    usuario:uid,
    ...req.body
  });
  try{
    const medicoDB = await medico.save();
    res.json({
      ok: true,
      medico: medicoDB,
    });
  }catch (error) {
    res.status(500).json({
      ok: false,
      msg: "hable con el administrador",
    });
  }

};
const actualizarMedicos = (req, res = response) => {
  res.json({
    ok: true,
    msg: "actualizarMedicos",
  });
};
const borrarMedicos = (req, res = response) => {
  res.json({
    ok: true,
    msg: "borrarMedicos",
  });
};
module.exports = {
  getMedicos,
  crearMedicos,
  actualizarMedicos,
  borrarMedicos,
};
