module.exports = (sequelize, Sequelize) => {
    const Pessoa = sequelize.define("pessoa", {
      IdPessoa: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      nome: {
        type: Sequelize.STRING,
        allowNull: false
      },
      nr_contato: {
        type: Sequelize.STRING 
      },
      nr_contatosec: {
        type: Sequelize.STRING
      },
      ds_observacao: {
        type: Sequelize.STRING
      },
      id_operador: {
        type: Sequelize.INTEGER
      }
    
    });
    
    return Pessoa;
};