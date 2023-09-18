module.exports = (sequelize, Sequelize) => {
    const TipoAtendente = sequelize.define("tipoAtendente", {
      ds_tipoAtend: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      id_operador: {
        type: Sequelize.INTEGER
      }
    });
  
    return TipoAtendente;
};