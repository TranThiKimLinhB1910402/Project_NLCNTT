const express = require("express");
const services = require("../controllers/service.controller");

const router = express.Router();

router.route("/")
    .get(services.getAll)
    .post(services.create);

router.route("/:id")
    // .get(services.fineOne)
    .put(services.update)
    .delete(services.delete);

module.exports = router;
