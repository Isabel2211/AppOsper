const { response } = require("express");
const Venta = require("../models/facturas.model");

const ventaspost = async (req, res) => {
  const body = req.body;
  console.log(body);

  //guardar bd
  try {
    try {
      const ventaDB = new Venta(body);
      await ventaDB.save();
      res.redirect("ventas");
    } catch (error) {
      console.log(error);
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = { ventaspost };
