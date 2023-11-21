const db = require("../models");
const TipoIntervencao = db.tipoIntervencao;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
	//   if (!req.body.ds_tipoatend) {
	//     res.status(400).send({
	//       message: "Descrição do tipo de atendimento é um parâmetro obrigatório."
	//     });
	//     return;
	//   }
	//   if (!req.body.id_operador) {
	//     res.status(400).send({
	//       message: "Operador é um parâmetro obrigatório."
	//     });
	//     return;
	//   }

	TipoIntervencao.create({
		ds_tipoInterv: `${req.body.ds_tipoInterv}`,
		id_operador: `${req.body.id_operador}`,
	}).then((data) => {
		res.send(data);
	})
	.catch((err) => {
		res.status(500).send({
			message:
				err.message || "Ocorreu um erro ao recuperar os dados.",
		});
	});;
};
exports.findAll = (req, res) => {
	const name = req.query.name;
	var condition = name ? { nome: { [Op.like]: `%${name}%` } } : null;

	TipoIntervencao.findAll({ where: condition })
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

exports.findOne = (req, res) => {
	const id = req.params.id;

	TipoIntervencao.findByPk(id)
		.then((data) => {
			if (data) {
				res.send(data);
			} else {
				res.status(404).send({
					message: `Tipo de atendimento com id ${id} não encontrado.`,
				});
			}
		})
		.catch((err) => {
			res.status(500).send({
				message: "Error retrieving Tutorial with id=" + id,
			});
		});
};
