const { response } = require("express");
const Reserva = require("../models/reservas.model.js");

const reservaspost = async (req, res) => {
  const body = req.body;
  console.log(body);

  //guardar bd
  try {
    try {
      const reservaDB = new Reserva(body);
      await reservaDB.save();
      res.redirect("reservas");
    } catch (error) {
      console.log(error);
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = { reservaspost };
