module.exports = (app) => {
	var router = require("express").Router();
	const tipoIntervencao = require("../controllers/tipoIntervencao.controller");
	// Create a new Paciente
	//router.post("/",(pessoa.create,paciente.create))
	router.post("/", tipoIntervencao.create); //<------------------------------------
	router.get("/tipoIntervencao", tipoIntervencao.findAll); //<------------------------------------
	router.get("/:id", tipoIntervencao.findOne);
	// router.put("/:nr_tipoIntervencao", tipoIntervencao.update);
	app.use("/api/tipoIntervencao", router);
};
