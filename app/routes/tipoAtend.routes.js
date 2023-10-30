module.exports = app => {
    const tipoAtend = require("../controllers/tipoAtend.controller")

    var router = require("express").Router();

    router.get("/tipoatend", tipoAtend.findAll);

    app.use('/api/tipoatend', router);
};