const db = require("../models");
const Agendamento = db.agendamentos;
const Paciente = db.pacientes;
const Pessoa = db.pessoas;
const Atendimento = db.atendimento
const TipoAtendimento = db.tipoAtend
const Op = db.Sequelize.Op;
exports.create = (req, res) => {
	if (!req.body.IdPessoa) {
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

	Agendamento.create({
		IdPessoa: `${req.body.IdPessoa}`,
		cd_tipoAtend: `${req.body.cd_tipoAtend}`,
		dt_atendimento: `${req.body.dt_atendimento}`,
		dt_horaInicio: `${req.body.dt_horaInicio}`,
		dt_horaFim: `${req.body.dt_horaFim}`,
		ds_observacao: `${req.body.ds_observacao}`,
		id_operador: `${req.body.id_operador}`,
		is_atendido: `${req.body.is_atendido}`,
	})
		.then((data) => {
			res.send(data);
		})
		.catch((err) => {
			res.status(500).send({
				message:
					err.message ||
					"Teste.",
			});
		});
};
exports.findAll = (req, res) => {
	const name = req.query.name;
	var condition = name ? { name: { [Op.like]: `%${name}%` } } : null;

	Agendamento.findAll({
		include: [
			{
				model: Paciente,
				include: Pessoa, // Inclua o modelo Pessoa
			},
		],

		where: {
			...condition,
			in_cancelado: {
				[Op.eq]: false, // Buscar apenas onde in_cancelado é false
			},
			is_atendido:{
				[Op.eq]: false
			}
			
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

exports.findAllWithDsAtend = (req, res) => {
	const name = req.query.name;
	var condition = name ? { name: { [Op.like]: `%${name}%` } } : null;

	Agendamento.findAll({
		include: [
			{
				model: Paciente,
				include: Pessoa, // Inclua o modelo Pessoa
			},
			{
				model: TipoAtendimento, // Adicione o INNER JOIN com a tabela TipoAtendimento
			},
		],

		where: {
			...condition,
			in_cancelado: {
				[Op.eq]: false, // Buscar apenas onde in_cancelado é false
			},
			is_atendido:{
				[Op.eq]: false
			}
			
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

	Agendamento.findByPk(id)
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

	Agendamento.update(req.body, {
		where: { nr_agendamento: nr_agendamento },
	})
		.then((num) => {
			if (num == 1) {
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

exports.findAllDate = (req, res) => {
	const date = req.params.dt_atendimento;
	console.log(date)
	var condition = date ? { dt_atendimento: { [Op.eq]: `%${date}%` } } : null;

	Agendamento.findAll({
		include: [
			{
				model: Paciente,
				include: Pessoa, // Inclua o modelo Pessoa
			},
			{
				model: TipoAtendimento, // Adicione o INNER JOIN com a tabela TipoAtendimento
			},
		],

		where: {
			...condition,
			in_cancelado: {
				[Op.eq]: false, // Buscar apenas onde in_cancelado é false
			},
			is_atendido:{
				[Op.eq]: false
			}
			
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
