const { response } = require("express");

// getTodo

const getTodo = (req, res=response) => {
const busqueda =req.params.busqueda;

  res.json({
    ok: true,
    busqueda: busqueda,
  });
};

module.exports = {
  getTodo,
};
