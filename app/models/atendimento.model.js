module.exports = (sequelize, Sequelize) => {
	const Atendimento = sequelize.define("atendimento", {
		nr_atendimento: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		dt_atendimento: {
			type: Sequelize.DATE,
			allowNull: false,
		},
		dt_horaInicio: {
			type: Sequelize.TIME,
		},
		dt_horaFim: {
			type: Sequelize.TIME,
		},
		ds_motivo: {
			type: Sequelize.STRING,
		},
		id_operador: {
			type: Sequelize.INTEGER,
		},
    //foreign keys
		nr_agendamento: {
			type: Sequelize.INTEGER,
		},
		cd_tipoInterv: {
			type: Sequelize.INTEGER,
			allowNull: false,
		},
		id_pessoa: {
			type: Sequelize.INTEGER,
		},
		cd_tipoAtend: {
			type: Sequelize.INTEGER,
			allowNull: false,
		},
	});

	return Atendimento;
};
