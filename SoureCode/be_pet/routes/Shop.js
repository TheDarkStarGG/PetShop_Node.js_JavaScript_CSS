module.exports = (app) => {
  var Pet = require("../controller/Pet");
  var router = require("express").Router();
  router.get("/", Pet.getAllShop);
  app.use("/shops", router);
};
