const db = require("../models");
const Atendimento = db.atendimento;
const Paciente = db.pacientes;
const Pessoa = db.pessoas;
const Op = db.Sequelize.Op;
exports.create = (req, res) => {
	if (!req.body.id_pessoa) {
		res.status(400).send({
			message: "Id pessoa é um campo obrigatório!",
		});
		return;
	}
	if (!req.body.cd_tipoAtend) {
		res.status(400).send({
			message: "Tipo de atendimento é um campo obrigatório!",
		});
		return;
	}
	if (!req.body.dt_atendimento) {
		res.status(400).send({
			message: "Data do atendimento é um campo obrigatório!",
		});
		return;
	}

	Atendimento.create({
		// nr_atendimento: `${req.body.nr_atendimento}`,
		dt_atendimento: `${req.body.dt_atendimento}`,
		dt_horaInicio: `${req.body.dt_horaInicio}`,
		dt_horaFim: `${req.body.dt_horaFim}`,
		ds_motivo: `${req.body.ds_motivo}`,
		id_operador: `${req.body.id_operador}`,
        nr_agendamento: `${req.body.nr_agendamento}`,
        cd_tipoInterv: `${req.body.cd_tipoInterv}`,
        id_pessoa: `${req.body.id_pessoa}`,
		cd_tipoAtend: `${req.body.cd_tipoAtend}`,
	}).then((data) => {
		res.send(data);
	})
	
};
exports.findAll = (req, res) => {
	const name = req.query.name;
	var condition = name ? { name: { [Op.like]: `%${name}%` } } : null;

	Atendimento.findAll({
		include: [
			{
				model: Paciente,
				include: Pessoa, // Inclua o modelo Pessoa
			},
		],
		where: {
			...condition,	
		},
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
};

//RETORNAR POR ID
exports.findOne = (req, res) => {
	const id = req.params.id;

	Atendimento.findByPk(id)
		.then((data) => {
			if (data) {
				res.send(data);
			} else {
				res.status(404).send({
					message: `Agendamento não encontrado com número=${id}.`,
				});
			}
		})
		.catch((err) => {
			res.status(500).send({
				message: "Error retrieving Tutorial with id=" + id,
			});
		});
};

//ATUALIZAR UM TUTORIAL POR ID
exports.update = (req, res) => {
	const nr_agendamento = req.params.nr_agendamento;

	Atendimento.update(req.body, {
		where: { nr_agendamento: nr_agendamento },
	})
		.then((num) => {
			if (num == 1) {
				console.log(req.body);
				res.send({
					message: "Tutorial was updated successfully.",
				});
			} else {
				res.send({
					message: `Cannot update Tutorial with id=${id}. Maybe Tutorial was not found or req.body is empty!`,
				});
			}
		})
		.catch((err) => {
			res.status(500).send({
				message: "Error updating Tutorial with id=" + id,
			});
		});
};
