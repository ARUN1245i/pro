const express = require("express");
const { apply, trackStatus } = require("../controllers/businessController");

const router = express.Router();

router.post("/apply", apply);
router.get("/track/:id", trackStatus);

module.exports = router;
