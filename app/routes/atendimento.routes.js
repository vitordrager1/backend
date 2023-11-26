module.exports = (app) => {
	var router = require("express").Router();
	const atendimento = require("../controllers/atendimento.controller");
	// Create a new Paciente
	router.post("/", atendimento.create); //<------------------------------------
	router.get("/", atendimento.findAll); //<------------------------------------
	router.get("/:id", atendimento.findOne);
	router.put("/:nr_atendimento", atendimento.update);
	app.use("/api/atendimento", router);
};
