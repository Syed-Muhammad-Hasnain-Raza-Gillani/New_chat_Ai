const express = require("express");
const router = express.Router();
const { generateResponse } = require("../controllers/openaiController");

router.post("/generate", generateResponse);

module.exports = router;
