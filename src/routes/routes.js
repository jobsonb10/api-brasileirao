const routes = require("express").Router();
const TimesController = require("../controllers/TimesController");
const TimesMiddleware = require("../middlewares/TimesMiddleware");

routes.get("/times", TimesController.getAll);
routes.post("/times", TimesController.create);
routes.get("/times/:id", TimesMiddleware.ValidaID, TimesController.getById);
routes.delete("/times/:id", TimesMiddleware.ValidaID, TimesController.del);
routes.put("/times/:id", TimesMiddleware.ValidaID, TimesMiddleware.ValidaBody, TimesController.update);
routes.get("/filterByName", TimesController.filterByName);

module.exports = routes;



