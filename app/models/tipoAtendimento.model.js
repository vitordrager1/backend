module.exports = (sequelize, Sequelize) => {
    const TipoAtendimento = sequelize.define("tipoAtendimento", {
      ds_tipoAtend: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      id_operador: {
        type: Sequelize.INTEGER
      }
    });
  
    return TipoAtendimento;
};