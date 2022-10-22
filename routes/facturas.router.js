const { Router } = require("express");
const router = Router();
const { facturasget } = require("../controllers/facturas.controller");

router.get("/", facturasget);

module.exports = router;
