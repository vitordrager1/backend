module.exports = (sequelize, Sequelize) => {
    const Agendamento = sequelize.define("agendamento", {
      dt_agendamento: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      dt_horaInicio: {
        type: Sequelize.DATE,
      },
      dt_horaFim: {
        type: Sequelize.DATE,
      },
      ds_observacao: {
        type: Sequelize.DATE,
      },
      id_operador: {
        type: Sequelize.INTEGER
      }
    });
  
    return Agendamento;
};