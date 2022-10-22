const { Router } = require("express");
const router = Router();
const { ventaspost } = require("../controllers/ventas.controller");

router.get("/", (req, res) => {
  res.render("ventas");
});

router.post("/", ventaspost);

module.exports = router;
