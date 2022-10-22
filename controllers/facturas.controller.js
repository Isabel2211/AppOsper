const { response } = require("express");
const Factura = require("../models/facturas.model");

const facturasget = async (req, res = response) => {
  try {
    const arrayFacturasDB = await Factura.find();
    res.render("facturas", {
      arrayFacturas: arrayFacturasDB,
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { facturasget };
