module.exports = (sequelize, Sequelize) => {
    const Agendamento = sequelize.define("agendamento", {
      nr_agendamento: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      IdPessoa: {
        type: Sequelize.INTEGER,
      },
      cd_tipoAtend: {
      type: Sequelize.INTEGER,
      allowNull: false,
      },
      dt_atendimento: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      dt_horaInicio: {
        type: Sequelize.TIME,
      },
      dt_horaFim: {
        type: Sequelize.TIME,
      },
      ds_observacao: {
        type: Sequelize.STRING,
      },
      id_operador: {
        type: Sequelize.INTEGER
      }
    });
  
    return Agendamento;
};