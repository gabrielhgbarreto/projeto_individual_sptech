var express = require("express");
var router = express.Router();

var dashboardController = require("../controllers/dashboardController");

router.post("/enviar", function (req, res) {
    dashboardController.enviar(req, res);
});

router.get("/cor", function (req, res) {
    dashboardController.cor(req, res);
});

router.get("/idadeRonco", function (req, res) {
    dashboardController.idadeRonco(req, res);
});

router.get("/versoes", function (req, res) {
    dashboardController.versoes(req, res);
});

router.post("/feedback", function (req, res) {
    dashboardController.feedback(req, res);
});

module.exports = router;