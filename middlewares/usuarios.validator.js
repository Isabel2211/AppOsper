const { check } = require("express-validator");
const { validateResult } = require("../helpers/validatehelper");
const Role = require("../models/rol.model");
const Usuario = require("../models/usuario.model");

//validaciones para el post
const validateCreate = [
  check("nombre", "El nombre es obligatorio").exists().not().isEmpty(),
  check("correo", "el correo es obligatorio").exists().isEmail(),
  check("correo").custom(async (correo = "") => {
    const correoExiste = await Usuario.findOne({ correo });
    if (correoExiste) {
      throw new Error(`El correo ${correo} ya esta registrado`);
    }
  }),

  check(
    "contraseña",
    "La contraseña debe tener como minimo 6 caracteres"
  ).isLength({ min: 6 }),
  //check("rol").isIn(["ADMIN_ROL", "USER_ROL"]),
  check("rol", "El rol es obligatorio").custom(async (rol = "") => {
    const existeRol = await Role.findOne({ rol });
    if (!existeRol) {
      throw new Error(`Èl rol ${rol} no esta registrado en la base de datos`);
    }
  }),
  (req, res, next) => {
    validateResult(req, res, next);
  },
];

//validaciones para el put
const validatePut = [
  check("id", "No es un id valido").isMongoId(),
  check("id").custom(async (id) => {
    const existeUsuarioPorId = await Usuario.findById(id);
    if (!existeUsuarioPorId) {
      throw new Error(`El usuairo con el id: ${id} no existe`);
    }
  }),
  check("rol", "El rol es obligatorio").custom(async (rol = "") => {
    const existeRol = await Role.findOne({ rol });
    if (!existeRol) {
      throw new Error(
        `Èl rol ${rol} no esta registrado en la base de datos por favor verifique los roles disponibles`
      );
    }
  }),
  (req, res, next) => {
    validateResult(req, res, next);
  },
];

const validateDelete = [
  check("id", "No es un id valido").isMongoId(),
  check("id").custom(async (id) => {
    const existeUsuarioPorId = await Usuario.findById(id);
    if (!existeUsuarioPorId) {
      throw new Error(`El usuairo con el id: ${id} no existe`);
    }
  }),
  (req, res, next) => {
    validateResult(req, res, next);
  },
];

module.exports = {
  validateCreate,
  validatePut,
  validateDelete,
};
