const express = require("express");
const users = require("../controllers/user.controller");

const router = express.Router();

router.route("/")
    .get(users.getAllUser)

router.route("/:id")
    .get(users.fineOne)
router.route("/register")
    .post(users.createUser)
router.route("/login")
    .post(users.login)
module.exports = router;
