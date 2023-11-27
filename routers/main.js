const express = require("express");
const router = express.Router();

const mainController = require("../controller/mainController"); 

router.get("/", mainController.mostrarHome); 

module.exports = router;
