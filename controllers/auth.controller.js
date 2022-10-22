const { response } = require("express");
const bcryptjs = require("bcryptjs");
const Usuario = require("../models/usuario.model");
const { generarJWT } = require("../helpers/generar.JWT");

const login = async (req, res = response) => {
  const { correo, contraseña, nombre } = req.body;

  try {
    //verificar si el correo existe
    const usuario = await Usuario.findOne({ correo });
    if (!usuario) {
      return res.status(400).json({
        msg: "usuario / contraseña no son correctos por favor verifique",
      });
    }

    //verificar si el usuario esta activo
    if (!usuario.estado) {
      return res.status(400).json({
        msg: "usuario / contraseña no son correctos - estado: false",
      });
    }
    //verificar la contraseña
    const validContraseña = bcryptjs.compareSync(
      contraseña,
      usuario.contraseña
    );
    if (!validContraseña) {
      return res.status(400).json({
        msg: "usuario / contraseña no son correctos - contraseña",
      });
    }

    //generar el JWT
    const token = await generarJWT(usuario.id);

    res.redirect("administracion");
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "Algo salio mal verifique con el administrador",
    });
  }
};

module.exports = {
  login,
};
