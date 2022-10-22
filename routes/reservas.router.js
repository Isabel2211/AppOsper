const { Router } = require("express");
const { reservaspost } = require("../controllers/reservas.controller");
const router = Router();

router.get("/", (req, res) => {
  res.render("reservas");
});

router.post("/", reservaspost);

module.exports = router;
