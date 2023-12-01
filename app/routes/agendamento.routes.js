module.exports = (app) => {
	var router = require("express").Router();
	const agendamento = require("../controllers/agendamento.controller");
	// Create a new Paciente
	//router.post("/",(pessoa.create,paciente.create))
	router.post("/", agendamento.create); //<------------------------------------
	router.get("/agendamentos", agendamento.findAll); //<------------------------------------
	router.get("/date/:dt_atendimento", agendamento.findAllDate); //<------------------------------------
	router.get("/:nr_cpf", agendamento.findOne);
	router.put("/:nr_agendamento", agendamento.update);
	app.use("/api/agendamentos", router);
};
