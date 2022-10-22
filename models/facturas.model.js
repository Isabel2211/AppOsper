const { Schema, model } = require("mongoose");

const FacturaSchema = Schema({
  identificacion: {
    type: Number,
    required: [true, "la identificacion es obligatoria"],
  },

  nombre: {
    type: String,
    required: [true, "el nombre es obligatorio"],
  },

  apellido: {
    type: String,
    required: [true, "el apellido es obligatorio"],
  },

  direccion: {
    type: String,
    required: [true, "la direccion es obligatoria"],
  },

  whatsapp: {
    type: Number,
    required: [true, "el numero de whatsapp es obligatorio"],
  },

  orden: {
    type: String,
    required: [true, "la orden es requerida"],
  },

  fecha: {
    type: String,
    required: [true, "la fecha es obligatoria"],
  },

  total: {
    type: Number,
    required: [true, "el total es obligatorio"],
  },
});

module.exports = model("Factura", FacturaSchema);
