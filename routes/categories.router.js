const { Router } = require("express");
const router = Router();

const {
  categoriesGet,
  categoriesGetId,
  crearCategoria,
  categoriesPut,
  categoriesDelete,
} = require("../controllers/categories.controller");

const { validarJWT } = require("../middlewares/jwt.validator");
const {
  validarCategoriasCreate,
  validarGetId,
  validatePut,
} = require("../middlewares/validar.categorias");

//obtener todas las categorias publico
router.get("/", categoriesGet);

//obtener una categoria por id publico
router.get("/:id", validarGetId, categoriesGetId);

//crear categoria -privado con cualquier rol con un token valido
router.post("/", [validarJWT], validarCategoriasCreate, crearCategoria);

//actualizar una categoria --privado-- cualquiera con token valido
router.put("/:id", validatePut, categoriesPut);

//borrar una categoria --privado-- solo admin
router.delete("/:id", categoriesDelete);

module.exports = router;
