module.exports = app => {
    const atendente = require("../controllers/atendente.controller")

    var router = require("express").Router();

    router.post("/", atendente.create);

    router.get("/", atendente.findAll);

    router.get("/:id", atendente.findOne);

    app.use('/api/atendente', router);
};