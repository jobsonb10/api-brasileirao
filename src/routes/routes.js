const routes = require("express").Router();
const TimesController = require("../controllers/TimesController");

routes.get("/times", TimesController.getAll);
routes.post("/times", TimesController.create);

module.exports = routes;



