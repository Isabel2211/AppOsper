const { response } = require("express");
const Reserva = require("../models/reservas.model.js");

const reservacionesget = async (req, res = response) => {
  try {
    const arrayReservasDB = await Reserva.find();
    res.render("reservaciones", {
      arrayReservas: arrayReservasDB,
    });
  } catch (error) {
    console.log(error);
  }
};

const reservacionesdelete = async (req, res) => {
  const id = req.params.id;
  try {
    const reservacionesDB = await Reserva.findByIdAndDelete({ _id: id });
    if (reservacionesDB) {
      res.json({
        estado: true,
        mensaje: "eliminado",
      });
    } else {
      res.json({
        estado: false,
        mensaje: "error al eliminar",
      });
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = { reservacionesget, reservacionesdelete };
