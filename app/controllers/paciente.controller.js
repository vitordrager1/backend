const db = require("../models");
const Paciente = db.pacientes;
const Pessoa = db.pessoas;
const Op = db.Sequelize.Op;
exports.create = (req, res) => {
	// Pessoa.create({
	//   nome: `${req.body.nome}`,
	//   nr_contato: `${req.body.nrContato}`,
	//   nr_contatosec: `${req.body.nrContatoSec}`,
	//   ds_observacao: `${req.body.dsObservacao}`,
	//   id_operador: `${req.body.idOperador}`
	// }
	// );
	// Create a Paciente
	Paciente.create({
		//dt_inativacao: `${req.body.dtInativacao}`,
		IdPessoa: `${req.body.IdPessoa}`,
		id_operador: `${req.body.id_operador}`,
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
	var condition = name ? { name: { [Op.like]: `%${name}%` } } : null;

	Paciente.findAll({
		include: [
			{
				model: Pessoa,
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
					err.message ||
					"Some error occurred while retrieving tutorials.",
			});
		});
};

exports.findAllLimit = (req, res) => {
	const name = req.query.name;
	var condition = name ? { nome: { [Op.like]: `%${name}%` } } : null;

	Paciente.findAll({
		include: [
			{
				model: Pessoa,
				where: {
					nome: { [Op.like]: `%${name}%` }
					// IdPessoa: Sequelize.col('Paciente.IdPessoa')
				}
			},
		],
		limit: 5,
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
