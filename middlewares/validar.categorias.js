const { check } = require("express-validator");
const { validateResult } = require("../helpers/validatehelper");
const { Categoria } = require("../models");

const validarGetId = [
  check("id", "No es un id valido").isMongoId(),
  check("id").custom(async (id = "") => {
    const existeCategoria = await Categoria.findById(id);
    if (!existeCategoria) {
      throw new Error(`La categoria con id ${id} no existe`);
    }
  }),
  (req, res, next) => {
    validateResult(req, res, next);
  },
];

const validarCategoriasCreate = [
  check("nombre", "el nombre es obligatorio").not().isEmpty(),
  (req, res, next) => {
    validateResult(req, res, next);
  },
];

const validatePut = [
  check("id", "No es un id valido").isMongoId(),
  check("id").custom(async (id = "") => {
    const existeCategoria = await Categoria.findById(id);
    if (!existeCategoria) {
      throw new Error(`La categoria con id ${id} no existe`);
    }
  }),
  check("nombre", "El nombre es obligatorio").exists().not().isEmpty(),
  (req, res, next) => {
    validateResult(req, res, next);
  },
];

module.exports = { validarCategoriasCreate, validarGetId, validatePut };
