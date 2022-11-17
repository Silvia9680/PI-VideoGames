const { Router } = require("express");
const router = Router();
const { getPlatforms } = require ("../controllers/Platforms")

router.get("/", getPlatforms)

module.exports = router;