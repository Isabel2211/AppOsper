const { Router } = require("express");
const {
  validateCreate,
  validatePut,
  validateDelete,
} = require("../middlewares/usuarios.validator");
const { validarJWT } = require("../middlewares/jwt.validator");
const { AdminRol, tieneRol } = require("../middlewares/validar.roles");
const router = Router();
const {
  usuariosGet,
  usuariosPost,
  usuariosPut,
  usuariosPatch,
  usuariosDelete,
} = require("../controllers/users.controller");

router.get("/", (req, res) => {
  res.render("usuarios");
});

router.get("/", usuariosGet);
router.post("/", validateCreate, usuariosPost);
router.put("/:id", validatePut, usuariosPut);
router.patch("/", usuariosPatch);
router.delete(
  "/:id",
  validarJWT,
  tieneRol("ADMIN_ROL", "VENTAS_ROL"),
  validateDelete,
  usuariosDelete
);

module.exports = router;
