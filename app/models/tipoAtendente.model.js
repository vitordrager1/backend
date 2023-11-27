module.exports = (sequelize, Sequelize) => {
    const TipoAtendente = sequelize.define("tipoAtendente", {
      tp_atendente: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      ds_tipoAtendente: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      id_operador: {
        type: Sequelize.INTEGER
      }
    });
  
    return TipoAtendente;
};