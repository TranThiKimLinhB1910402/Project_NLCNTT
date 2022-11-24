const express = require("express");
const typecar = require("../controllers/typecar.controller");

const router = express.Router();

router.route("/")
    .get(typecar.getAll)
    .post(typecar.create)
// router.route("/:id")
//     .get(typecar.fineOne);
    
module.exports = router;