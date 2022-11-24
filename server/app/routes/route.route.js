const express = require("express");
const routes = require("../controllers/route.controller");

const router = express.Router();

router.route("/")
    .get(routes.getAll);
    
module.exports = router;
