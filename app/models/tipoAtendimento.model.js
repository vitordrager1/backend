module.exports = (sequelize, Sequelize) => {
    const TipoAtendimento = sequelize.define("tipoAtendimento", {
      cd_tipoAtend: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
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