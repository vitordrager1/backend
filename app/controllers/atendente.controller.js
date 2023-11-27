const db = require("../models");
const Atendente = db.atendente;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {


	// Create a Tutorial
	Atendente.create({
		id_pessoa: `${req.body.id_pessoa}`,
		nr_cpf: `${req.body.nr_cpf}`,
		cd_hash: `${req.body.cd_hash}`,
	})
		.then((data) => {
			res.send(data);
		})
		.catch((err) => {
			res.status(500).send({
				message:
					err.message ||
					"Ocorreu um erro ao recuperar os dados. Entre em contato com o analista responsável.",
			});
		});
};
exports.findAll = (req, res) => {
	const name = req.query.name;
	var condition = name ? { nome: { [Op.like]: `%${name}%` } } : null;

	Pessoa.findAll({ where: condition })
		.then((data) => {
			res.send(data);
		})
		.catch((err) => {
			res.status(500).send({
				message:
					err.message ||
					"Erro ao recuperar os dados. Entre em contato com o analista responsável.",
			});
		});
};

//Update
exports.update = (req, res) => {
	const id = req.params.id;

	Atendente.update(req.body, {
		where: { IdPessoa: id },
	})
		.then((num) => {
			if (num == 1) {
				res.send({
					message: "Atendente atualizado com sucesso.",
				});
			} else {
				res.send({
					message:
						"Erro ao recuperar os dados. Entre em contato com o analista responsável.",
				});
			}
		})
		.catch((err) => {
			console.log(err);
			res.status(500).send({
				message:
					"Erro ao recuperar os dados. Entre em contato com o analista responsável.",
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
				message:
					"Erro ao recuperar os dados. Entre em contato com o analista responsável.",
			});
		});
};
