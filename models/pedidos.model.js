const { Schema, model } = require("mongoose");

const PedidoSchema = Schema({
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
});

module.exports = model("Pedido", PedidoSchema);
