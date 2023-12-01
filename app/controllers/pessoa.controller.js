const db = require("../models");
const Pessoa = db.pessoas;
const Op = db.Sequelize.Op;
const Paciente = db.pacientes;

exports.create = (req, res) => {
	if (!req.body.nome) {
		res.status(400).send({
			message: "Content can not be empty!",
		});
		return;
	}

	// Create a Tutorial
	Pessoa.create({
		nome: `${req.body.nome}`,
		nr_contato: `${req.body.nrContato}`,
		nr_contatosec: `${req.body.nrContatoSec}`,
		ds_observacao: `${req.body.dsObservacao}`,
		id_operador: `${req.body.idOperador}`,
	})
		.then((data) => {
			res.send(data);
		})
		.catch((err) => {
			res.status(500).send({
				message:
					err.message ||
					"Some error occurred while retrieving tutorials.",
			});
		});
	// console.log(paciente)
	// Save Tutorial in the database
	// Paciente.create(paciente)
};
exports.findAll = (req, res) => {
	const name = req.query.name;
	var condition = name ? { nome: { [Op.like]: `%${name}%` } } : null;

	Pessoa.findAll({
		include: [
			{
				model: Paciente,
				required: true
			},
		],
		where: condition,
	})
		.then((data) => {
			res.send(data);
		})
		.catch((err) => {
			res.status(500).send({
				message:
					err.message || "Ocorreu um erro ao recuperar os dados.",
			});
		});
};
exports.findAllLimit = (req, res) => {
	const name = req.query.name;
	var condition = name ? { nome: { [Op.like]: `%${name}%` } } : null;

	Pessoa.findAll({
		include: [
			{
				model: Paciente,
				// required: true
			},
		],
		where: condition,
		limit: 5,
	})
		.then((data) => {
			console.log(Pessoa.sequelize.query);
			res.send(data);
		})
		.catch((err) => {
			console.log(err);
			res.status(500).send({
				message:
					err.message || "Ocorreu um erro ao recuperar os dados.",
			});
		});
};

//Update
exports.update = (req, res) => {
	const id = req.params.id;

	Pessoa.update(req.body, {
		where: { IdPessoa: id },
	})
		.then((num) => {
			if (num == 1) {
				console.log("att");
				res.send({
					message: "Tutorial was updated successfully.",
				});
			} else {
				res.send({
					message: `Nenhuma Pessoa foi atualiza ou encontrada`,
				});
			}
		})
		.catch((err) => {
			console.log(err);
			res.status(500).send({
				message: "Error updating Tutorial with id=" + id,
			});
		});
};

//RETORNAR POR ID
exports.findOne = (req, res) => {
	const id = req.params.id;

	Pessoa.findByPk(id)
		.then((data) => {
			if (data) {
				res.send(data);
			} else {
				res.status(5005).send({
					message: `Não foi possível localizar pessoa com id=${id}.`,
				});
			}
		})
		.catch((err) => {
			res.status(500).send({
				message: "Error retrieving Tutorial with id=" + id,
			});
		});
};
