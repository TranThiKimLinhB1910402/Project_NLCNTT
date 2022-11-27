const express = require("express");
const drivers = require("../controllers/driver.controller");

const router = express.Router();

router.route("/")
    .get(drivers.getAllDrivers)
    .post(drivers.createDriver)
router.route("/getday")
    .get(drivers.getDriverDay)
router.route("/:id")
    .get(drivers.fineOne)
    .delete(drivers.delete)
    .put(drivers.update)
module.exports = router;
