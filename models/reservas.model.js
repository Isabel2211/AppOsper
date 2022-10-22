const { Schema, model } = require("mongoose");

const ReservaSchema = Schema({
  fecha: {
    type: String,
    required: [true, "la fecha es obligatoria"],
  },

  hora: {
    type: String,
    required: [true, "la hora es obligatoria"],
  },

  nombre: {
    type: String,
    required: [true, "el nombre es obligatorio"],
  },

  telefono: {
    type: Number,
    required: [true, "el numero de telefono es obligatorio"],
  },

  personasmesa: {
    type: Number,
  },
});

module.exports = model("Reserva", ReservaSchema);
