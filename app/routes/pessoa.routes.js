module.exports = app => {
    const paciente = require("../controllers/paciente.controller")
    const pessoa = require("../controllers/pessoa.controller")

    var router = require("express").Router();

    router.get("/pessoas", pessoa.findAll);
  
    app.use('/api/pessoas', router);
  };