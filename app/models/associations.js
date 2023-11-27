//-------------------RELACIONAMENTOS---------------------

//Realizar os imports

const db = require("../models");
const Atendente = db.atendente;
const Pessoa = db.pessoas;
const Paciente = db.pacientes;
const Agendamento = db.agendamentos;
const TipoAtendimento = db.tipoAtend;
const Atendimento = db.atendimento;
const TipoIntervencao = db.tipoIntervencao;

async function Associations() {
	//[INICIO] - RELACIONAMENTO PESSOA 1 - 1 ATENDENTE
	Atendente.belongsTo(Pessoa, {
		foreignKey: {
			name: "id_pessoa", // Nome da coluna que será a chave estrangeira
			allowNull: false,
			primaryKey: true, // A chave estrangeira também é a chave primária
		},
	});
	//[FIM] - RELACIONAMENTO PESSOA 1 - 1 ATENDENTE

	//[INICIO] - RELACIONAENTO PESSOA 1 - 1 PACIENTE
	Paciente.belongsTo(Pessoa, {
		foreignKey: {
			name: "IdPessoa", // Nome da coluna que será a chave estrangeira
			allowNull: false,
			primaryKey: true, // A chave estrangeira também é a chave primária
		},
	});
	Pessoa.hasMany(Paciente, { foreignKey: "IdPessoa" });
	//[FIM] - RELACIONAENTO PESSOA 1 - 1 PACIENTE

	//[INICIO] - RELACIONAENTO AGENDAMENTO N - 1 TIPO ATENDIMENTO
	TipoAtendimento.hasMany(Agendamento, {
		foreignKey: {
			name: "cd_tipoAtend", // Nome da coluna que será a chave estrangeira
			allowNull: false,
		},
	});
	Agendamento.belongsTo(TipoAtendimento, {
		foreignKey: {
			name: "cd_tipoAtend", // Nome da coluna que será a chave estrangeira
			allowNull: false,
		},
	});

	Paciente.hasMany(Agendamento, {
		foreignKey: {
			name: "IdPessoa", // Nome da coluna que será a chave estrangeira
			allowNull: false,
		},
	});
	Agendamento.belongsTo(Paciente, {
		foreignKey: {
			name: "IdPessoa", // Nome da coluna que será a chave estrangeira
			allowNull: false,
		},
	});

	//[FIM] - RELACIONAENTO PESSOA 1 - 1 PACIENTE

	//[INICIO] - RELACIONAMENTOS ATENDIMENTO
	TipoAtendimento.hasMany(Atendimento, {
		foreignKey: {
			name: "cd_tipoAtend", // Nome da coluna que será a chave estrangeira
			allowNull: false,
		},
	});
	Atendimento.belongsTo(TipoAtendimento, {
		foreignKey: {
			name: "cd_tipoAtend", // Nome da coluna que será a chave estrangeira
			allowNull: false,
		},
	});

	Paciente.hasMany(Atendimento, {
		foreignKey: {
			name: "id_pessoa", // Nome da coluna que será a chave estrangeira
			allowNull: false,
		},
	});
	Atendimento.belongsTo(Paciente, {
		foreignKey: {
			name: "id_pessoa", // Nome da coluna que será a chave estrangeira
			allowNull: false,
		},
	});

	Atendimento.belongsTo(TipoIntervencao, {
		foreignKey: "cd_tipoInterv",
		allowNull: false,
	});

	TipoIntervencao.hasMany(Atendimento, {
		foreignKey: "cd_tipoInterv",
		allowNull: false,
	});

	Atendimento.belongsTo(Agendamento, {
		foreignKey: "nr_agendamento",
	});

	//[FIM] - RELACIONAMENTOS ATENDIMENTO

	//[INICIO] - RELACIONAMENTOS ATENDENTE

	//[FIM] - RELACIONAMENTOS ATENDENTE
}

module.exports = Associations;
