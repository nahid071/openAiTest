const express = require("express");
const { protect } = require("../middleware/authMiddleware");
const { getEdit, getImage } = require("../controllers/openAiController");

const router = express.Router();

router.post("/", getEdit);
router.post("/genimg", getImage);

module.exports = router;
