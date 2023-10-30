const moment = require('moment')
module.exports = (sequelize, Sequelize) => {
    const Atendente = sequelize.define("atendente", {
      IdPessoa: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      nr_cpf: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      // cd_senha: {
      //   type: Sequelize.STRING,
      //   allowNull: false,
      //   unique: true
      // },
      cd_hash: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      dt_desligamento: {
        type: Sequelize.DATE,
        defaultValue: moment(new Date('01/01/2001'), 'DD/MM/YYYY').format('YYYY-MM-DD HH:mm:ss'),
        
      },
      id_operador: {
        type: Sequelize.INTEGER
      }
    
    });
    
    return Atendente;
  };
  