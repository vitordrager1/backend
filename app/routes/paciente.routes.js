module.exports = app => {
    const paciente = require("../controllers/paciente.controller")
    const pessoa = require("../controllers/pessoa.controller")

    var router = require("express").Router();

    router.post("/",paciente.create); //<------------------------------------

    router.get("/pacientes/limit", paciente.findAllLimit);

    app.use('/api/pacientes', router);
  };