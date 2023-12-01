module.exports = app => {
    const atendente = require("../controllers/atendente.controller")

    var router = require("express").Router();

    router.post("/", atendente.create);

    router.get("/", atendente.findAll);
    router.get("/:nr_cpf", atendente.findAll);

    router.get("/:nr_cpf", atendente.findOne);

    app.use('/api/atendente', router);
};