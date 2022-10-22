const { Router } = require("express");
const { login } = require("../controllers/auth.controller");
const { validateLogin } = require("../middlewares/auth.login.validator");
const router = Router();

router.get("/", (req, res) => {
  res.render("auth");
});

router.post("/", validateLogin, login);

module.exports = router;
