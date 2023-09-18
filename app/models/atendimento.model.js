module.exports = (sequelize, Sequelize) => {
    const Atendimento = sequelize.define("atendimento", {
      dt_atendimento: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: DATE.NOW
      },
      dt_horaInicio: {
        type: Sequelize.DATE
      },
      dt_horaFim: {
        type: Sequelize.DATE
      },
      ds_motivo: {
        type: Sequelize.STRING
      },
      id_operador: {
        type: Sequelize.INTEGER
      }
    });
  
    return Atendimento;
};