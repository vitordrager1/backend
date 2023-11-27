module.exports = (sequelize, Sequelize) => {
	const Atendente = sequelize.define("atendente", {
		id_pessoa: {
			type: Sequelize.INTEGER,
			primaryKey: true,
		},
		nr_cpf: {
			type: Sequelize.STRING,
			unique: true,
		},
		// cd_senha: {
		//   type: Sequelize.STRING,
		//   allowNull: false,
		//   unique: true
		// },
		cd_hash: {
			type: Sequelize.STRING,
			allowNull: false,
		},
		dt_desligamento: {
			type: Sequelize.DATE,
		},
	});

	return Atendente;
};
