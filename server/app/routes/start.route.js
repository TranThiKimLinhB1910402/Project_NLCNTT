const express = require("express");
const starts = require("../controllers/start.controller");

const router = express.Router();

router.route("/")
    .get(starts.getAll);
    
module.exports = router;
