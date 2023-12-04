module.exports = app => {
    const atendente = require("../controllers/atendente.controller")
    var router = require("express").Router();

    router.post("/", atendente.findLogin)

    app.use('/api/login', router);
};