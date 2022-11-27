const express = require("express");
const routes = require("../controllers/route.controller");

const router = express.Router();

router.route("/")
    .get(routes.getAll)
    .post(routes.create)
router.route("/:id")
    .get(routes.fineOne)
    .put(routes.update)
    .delete(routes.delete);
module.exports = router;
