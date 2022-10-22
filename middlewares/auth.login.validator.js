const { check } = require("express-validator");
const { validateResult } = require("../helpers/validatehelper");

const validateLogin = [
  check("correo", "El correo es obligatorio").exists().isEmail(),
  check("contraseña", "La contraseña es obligatoria").not().isEmpty(),
  (req, res, next) => {
    validateResult(req, res, next);
  },
];

module.exports = {
  validateLogin,
};
