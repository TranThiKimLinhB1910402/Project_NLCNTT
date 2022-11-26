const express = require("express");
const cars = require("../controllers/car.controller");

const router = express.Router();

router.route("/")
    .get(cars.getAll)
    .post(cars.create);
router.route("/getbs/:bs")
    .get(cars.findByBS)
router.route("/:id")
    .get(cars.fineOne)
    .put(cars.update)
    .delete(cars.delete);

module.exports = router;
