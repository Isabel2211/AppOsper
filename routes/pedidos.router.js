const { Router } = require("express");
const router = Router();
const { pedidospost } = require("../controllers/pedidos.controller");

router.get("/", (req, res) => {
  res.render("pedidos");
});

router.post("/", pedidospost);

module.exports = router;
