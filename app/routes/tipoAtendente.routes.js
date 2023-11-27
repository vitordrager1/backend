module.exports = app => {
    const tipoAtendente = require("../controllers/tipoAtendente.controller")

    var router = require("express").Router();

    router.post("/", tipoAtendente.create);

    router.get("/", tipoAtendente.findAll);

    router.get("/:id", tipoAtendente.findOne);

    app.use('/api/tipoAtendente', router);
};