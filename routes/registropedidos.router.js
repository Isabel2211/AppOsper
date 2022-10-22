const { Router } = require("express");
const router = Router();
const {
  registrospedidosget,
  registrospedidosdelete,
} = require("../controllers/registrospedidos.controller");

router.get("/", registrospedidosget);

router.delete("/:id", registrospedidosdelete);

module.exports = router;
