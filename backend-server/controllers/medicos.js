const { response } = require("express");
const Medico = require("../models/medico");

const getMedicos = async (req, res = response) => {
  const medicos = await Medico.find()
    .populate("usuario", "nombre email")
    .populate("hospital", "nombre");
  res.json({
    ok: true,
    Medicos: medicos,
  });
};

const crearMedicos = async (req, res = response) => {
  const uid = req.uid;
  const medico = new Medico({
    usuario: uid,
    ...req.body,
  });
  try {
    const medicoDB = await medico.save();
    res.json({
      ok: true,
      medico: medicoDB,
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      msg: "hable con el administrador",
    });
  }
};
const actualizarMedicos = async (req, res = response) => {
  const id = req.params.id;
  const uid = req.uid;

  try {
    const medico = await Medico.findById(id);

    if (!medico) {
      return res.status(404).json({
        ok: true,
        msg: "Medico no encontrado por id",
      });
    }

    const cambiosMedico = {
      ...req.body,
      usuario: uid,
    };

    const medicoActualizado = await Medico.findByIdAndUpdate(
      id,
      cambiosMedico,
      { new: true }
    );

    res.json({
      ok: true,
      medico: medicoActualizado,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      ok: false,
      msg: "Hable con el administrador",
    });
  }
};

const borrarMedicos = async (req, res = response) => {
  const medicoId = req.params.id;

  try {
    const medico = await Medico.findById(medicoId);
    //si no se encuentra elmedico
    if (!medico) {
      return res.json({
        ok: true,
        msg: "Medico no encontrado por id ",
      });
    }

    await Medico.findByIdAndRemove(medicoId);
    res.json({
      ok: true,
      msg: "Medico eliminado por id",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "hable con el administrador",
    });
  }
};

const getMedicoById = async(req, res = response) => {
  const id = req.params.id;
  try {
      const medico = await Medico.findById(id)
                                  .populate('usuario','nombre img')
                                  .populate('hospital','nombre img');
      res.json({
          ok: true,
          medico
      })
      
  } catch (error) {
      console.log(error);
      res.json({
          ok: true,
          msg: 'Hable con el administrador'
      })
  }
}
module.exports = {
  getMedicos,
  crearMedicos,
  actualizarMedicos,
  borrarMedicos,
  getMedicoById
};
