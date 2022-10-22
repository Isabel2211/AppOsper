const { response } = require("express");
const AdminRol = (req, res = response, next) => {
  if (!req.usuario) {
    return res.status(500).json({
      msg: "se quiere verificar el rol sin validar el token primero",
    });
  }

  const { rol, nombre } = req.usuario;
  if (rol !== "ADMIN_ROL") {
    msg: `${nombre} no es administrador - no puede modificar nada`;
  }

  next();
};

const tieneRol = (...roles) => {
  return (req, res = response, next) => {
    if (!req.usuario) {
      return res.status(500).json({
        msg: "se quiere verificar el rol sin validar el token primero",
      });
    }

    if (roles.includes(req.usuario.rol)) {
      return res.status(401).json({
        msg: "el usuario no tiene permiso - roles",
      });
    }
    next();
  };
};

module.exports = { AdminRol, tieneRol };
