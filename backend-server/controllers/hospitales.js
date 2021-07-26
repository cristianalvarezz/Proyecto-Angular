const { response } = require("express");
const Hospital = require("../models/hospital");

const getHospitales = async (req, res = response) => {
  //si quiero saber quien lo creo uso el populate
  const hospitales = await Hospital.find().populate(
    "usuario",
    "nombre img"
  );

  res.json({
    ok: true,
    hospitales,
  });
};

const crearHospital = async (req, res = response) => {
  const uid = req.uid;
  const hospital = new Hospital({
    usuario: uid,
    ...req.body,
    img:""
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
const actualizarHospital = async (req, res = response) => {
  const hospitalId = req.params.id;
  const uid = req.uid;

  try {
    const hospital = await Hospital.findById(hospitalId);
    //si no se encuentra el hospital
    if (!hospital) {
      return res.json({
        ok: true,
        msg: "Hospital no encontrado por id ",
      });
    }
    //aqui extraigo toda la informacion enviada desde el post
    const cambiosHospital = {
      ...req.body,
      usuario: uid,
    };
    const hospitalActualizado = await Hospital.findByIdAndUpdate(
      hospitalId,
      cambiosHospital,
      { new: true }
    );
    res.json({
      ok: true,
      hospital: hospitalActualizado,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "hable con el administrador",
      hospitalActualizado,
    });
  }
};
const borrarHospital = async(req, res = response) => {
  const hospitalId = req.params.id;

  try {
    const hospital = await Hospital.findById(hospitalId);
    //si no se encuentra el hospital
    if (!hospital) {
      return res.json({
        ok: true,
        msg: "Hospital no encontrado por id ",
      });
    }

    await Hospital.findByIdAndRemove(hospitalId);
    res.json({
      ok: true,
      msg: "Hospital eliminado por id",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "hable con el administrador",
      hospitalActualizado,
    });
  }
};
module.exports = {
  getHospitales,
  crearHospital,
  actualizarHospital,
  borrarHospital,
};
