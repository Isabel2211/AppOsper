const { response } = require("express");
const Pedido = require("../models/pedidos.model");

const registrospedidosget = async (req, res = response) => {
  try {
    const arrayregistroDB = await Pedido.find();
    res.render("registropedidos", {
      arrayRegistro: arrayregistroDB,
    });
  } catch (error) {
    console.log(error);
  }
};

const registrospedidosdelete = async (req, res) => {
  const id = req.params.id;
  try {
    const pedidosDB = await Pedido.findByIdAndDelete({ _id: id });
    if (pedidosDB) {
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

module.exports = { registrospedidosget, registrospedidosdelete };
