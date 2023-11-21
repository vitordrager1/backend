module.exports = (app) => {
	var router = require("express").Router();
	const atendimento = require("../controllers/atendimento.controller");
	// Create a new Paciente
	//router.post("/",(pessoa.create,paciente.create))
	router.post("/", atendimento.create); //<------------------------------------
	router.get("/atendimentos", atendimento.findAll); //<------------------------------------
	router.get("/:id", atendimento.findOne);
	router.put("/:nr_atendimento", atendimento.update);
	app.use("/api/atendimentos", router);
};
