const { response, request } = require("express");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const Usuario = require("../models/usuario.model");

const validarJWT = async (req = request, res = response, next) => {
  const token = req.header("x-token");

  if (!token) {
    return res.status(401).json({
      msg: "no hay token en la peticion",
    });
  }

  try {
    const { uid } = jwt.verify(token, process.env.SECRETEORPRIVATEKEY);
    const usuarioAuth = await Usuario.findById(uid);

    //verificar que el usuario con ese id exista
    if (!usuarioAuth) {
      return res.status(401).json({
        msg: "token no valido - el usuario no existe en BD",
      });
    }

    //verificar si el usuario tiene el estado en true
    if (!usuarioAuth.estado) {
      return res.status(401).json({
        msg: "token no valido - usuario con estado false",
      });
    }

    req.usuario = usuarioAuth;
    req.uid = uid;

    next();
  } catch (error) {
    console.log(error);
    res.status(401).json({
      msg: "token no valido",
    });
  }
};

module.exports = {
  validarJWT,
};
