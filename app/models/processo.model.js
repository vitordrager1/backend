module.exports = (sequelize, Sequelize) => {
    const Processo = sequelize.define("processo", {
      ds_processo: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      ds_observacao: {
        type:Sequelize.STRING
      },
      id_operador: {
        type: Sequelize.INTEGER
      }
    });
  
    return Processo;
  };