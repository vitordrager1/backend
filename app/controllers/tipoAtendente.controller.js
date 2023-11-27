const db = require("../models");
const TipoAtendente = db.tipoAtendente;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
	if (!req.body.ds_tipoAtendente) {
		res.status(400).send({
			message:
				"Descrição do tipo de atendente é um parâmetro obrigatório.",
		});
		return;
	}
	if (!req.body.id_operador) {
		res.status(400).send({
			message: "Operador é um parâmetro obrigatório.",
		});
		return;
	}

	TipoAtendente.create({
		//cd_tipoAtend: `${req.body.cd_tipoatend}`,
		ds_tipoAtendente: `${req.body.ds_tipoAtendente}`,
		id_operador: `${req.body.id_operador}`,
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
	TipoAtendente.findAll({ where: condition })
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

exports.findOne = (req, res) => {
	const id = req.params.id;

	TipoAtendente.findByPk(id)
		.then((data) => {
			if (data) {
				res.send(data);
			} else {
				res.status(500).send({
					message: `Tipo de atendente com id ${id} não encontrado.`,
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
