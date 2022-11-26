const express = require("express");
const rents = require("../controllers/rent.controller");

const router = express.Router();

router.route("/")
    .get(rents.getAll)
    .post(rents.create);
   
router.route("/:id")
    .get(rents.fineOne)
    .put(rents.update)
    .delete(rents.delete);
router.route("/phone/:phone")
    .get(rents.findByPhone)
module.exports = router;
