const { Router }  = require ('express');
const router = Router();

const videogames = require("./Videogames")
const videogamesById = require("./VideogameById")
const create = require("./CreateVideogame")
const genre = require("./Genre")
const platform = require("./Platform")

router.use("/Videogames", videogames);
router.use("/Videogames", videogamesById);
router.use("/Videogames", create);
router.use("/Genre", genre);
router.use("/Platform", platform);


module.exports = router;
