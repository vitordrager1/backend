module.exports = (sequelize, Sequelize) => {
    const TipoIntervencao = sequelize.define("tipoIntervencao", {
      ds_tipoInterv: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      id_operador: {
        type: Sequelize.INTEGER
      }
    });
  
    return TipoIntervencao;
};