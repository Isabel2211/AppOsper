const { Router } = require("express");
const router = Router();
const {
  reservacionesget,
  reservacionesdelete,
} = require("../controllers/reservaciones.controller");

router.get("/", reservacionesget);

router.delete("/:id", reservacionesdelete);

module.exports = router;
