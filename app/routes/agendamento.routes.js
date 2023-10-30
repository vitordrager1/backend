const { agendamentos } = require("../models");

module.exports = app => {
    var router = require("express").Router();
    const agendamento = require('../controllers/agendamento.controller')
    // Create a new Paciente
    //router.post("/",(pessoa.create,paciente.create))
    router.post("/",agendamento.create); //<------------------------------------

    app.use('/api/agendamentos', router);
  };