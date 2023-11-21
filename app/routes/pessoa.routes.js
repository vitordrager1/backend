module.exports = app => {
    const paciente = require("../controllers/paciente.controller")
    const pessoa = require("../controllers/pessoa.controller")

    var router = require("express").Router();

    router.get("/pessoas", pessoa.findAll);
    router.get("/pessoas/limit", pessoa.findAllLimit);
    router.get("/:id", pessoa.findOne);
    router.put("/:id", pessoa.update);
    app.use('/api/pessoas', router);
  };