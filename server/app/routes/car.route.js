const express = require("express");
const cars = require("../controllers/car.controller");

const router = express.Router();

router.route("/")
    .get(cars.getAll)
    .post(cars.create)
   // .delete(cars.deleteAll);
router.route("/:id")
    .get(cars.fineOne)
    .put(cars.update)
    .delete(cars.delete);
router.route('/date')
    .get(cars.getAllDate)
module.exports = router;
