const db = require("../models");
const Atendente = db.atendente;
const Op = db.Sequelize.Op;
const jwt = require ('jsonwebtoken')
const SECRET = 'DRAGER041223'
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
	const nr_cpf = req.query.nr_cpf;
	var condition = nr_cpf ? { nr_cpf: { [Op.eq]: `${nr_cpf}` } } : null;

	Atendente.findAll({ where: condition })
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
			res.status(500).send({
				message:
					"Erro ao recuperar os dados. Entre em contato com o analista responsável.",
			});
		});
};

//RETORNAR POR ID
exports.findOne = (req, res) => {
	const nr_cpf = req.params.nr_cpf;

	Atendente.findByPk(nr_cpf)
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

exports.findLogin = (req, res) => {
	const nr_cpf = req.body.cpf;
	const cd_hash = req.body.password;

	var condition = nr_cpf ? { nr_cpf: { [Op.eq]: `${nr_cpf}` } } : null;

	Atendente.findAll({ where: condition })
		.then((data) => {

			if (data[0].dataValues.nr_cpf == nr_cpf && data[0].dataValues.cd_hash == cd_hash) {
				const token = jwt.sign({userId: data.id_pessoa},SECRET)
				return res.send({user: data[0].dataValues.id_pessoa, auth: true, token});
			}

		})
		.catch((err) => {
			res.status(401).end()
		});
};
