module.exports = app => {
    const tipoAtend = require("../controllers/tipoAtend.controller")

    var router = require("express").Router();

    router.post("/tipoatend", tipoAtend.create);

    router.get("/tipoatend", tipoAtend.findAll);

    router.get("/:id", tipoAtend.findOne);

    app.use('/api/tipoatend', router);
};