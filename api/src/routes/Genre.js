const { Router } = require("express");
const { getAllGenres } = require("../controllers/Genre");

const router = Router();


router.get("/", getAllGenres)

module.exports = router;


 