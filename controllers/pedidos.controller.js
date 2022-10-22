const { response } = require("express");
const Pedido = require("../models/pedidos.model");

const pedidospost = async (req, res) => {
  const body = req.body;
  console.log(body);

  //guardar bd
  try {
    try {
      const pedidoDB = new Pedido(body);
      await pedidoDB.save();
      res.redirect("pedidos");
    } catch (error) {
      console.log(error);
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = { pedidospost };
