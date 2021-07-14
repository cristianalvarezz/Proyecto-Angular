const { response } = require("express");
const Hospital = require("../models/hospital");

const getHospitales = async(req, res = response) => {
  //si quiero saber quien lo creo uso el populate
  const hospitales = await Hospital.find().populate('usuario','nombre email img');

  res.json({
    ok: true,
    hospitales
  });
};

const crearHospital = async (req, res = response) => {
  const uid = req.uid;
  const hospital = new Hospital({
    usuario: uid,
    ...req.body,
  });
  // recupero el uid del usuario de la persona que seautentico
  try {
    const hospitalDB = await hospital.save();
    res.json({
      ok: true,
      hospital: hospitalDB,
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      msg: "hable con el administrador",
    });
  }
};
const actualizarHospital = (req, res = response) => {
  res.json({
    ok: true,
    msg: "actualizarHospitales",
  });
};
const borrarHospital = (req, res = response) => {
  res.json({
    ok: true,
    msg: "borrarHospitales",
  });
};
module.exports = {
  getHospitales,
  crearHospital,
  actualizarHospital,
  borrarHospital,
};
