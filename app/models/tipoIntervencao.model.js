module.exports = (sequelize, Sequelize) => {
	const TipoIntervencao = sequelize.define("tipoIntervencao", {
		cd_tipoInterv: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		ds_tipoInterv: {
			type: Sequelize.STRING,
			allowNull: false,
		},
		id_operador: {
			type: Sequelize.INTEGER,
		},
	});

	return TipoIntervencao;
};
