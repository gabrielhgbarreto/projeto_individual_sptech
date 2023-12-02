var express = require("express");
var router = express.Router();

var dashboardController = require("../controllers/dashboardController");

router.post("/enviar", function (req, res) {
    dashboardController.enviar(req, res);
});

module.exports = router;