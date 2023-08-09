
//AQUI CRIAMOS UMA TABELA NO BANCO POR MEIO DO SEQUELIZE
//O SEQUELIZE TUTORIAL.MODEL.JS REPRESENTA UMA TABELA NO MYSQL
module.exports = (sequelize, Sequelize) => {
    const Paciente = sequelize.define("paciente", {
        nome: {
        type: Sequelize.STRING
        },
        telefone_um: {
        type: Sequelize.STRING
        },
        telefone_dois: {
        type: Sequelize.STRING
        },
        dt_cancel: {
        type: Sequelize.DATE
        },
        observacoes: {
        type: Sequelize.STRING
        }
    });

    return Paciente;
  };