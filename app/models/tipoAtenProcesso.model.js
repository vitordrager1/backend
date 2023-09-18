//Associativa entre as tabelas
// Tipo Atendimento <--> Processo

module.exports = (sequelize, Sequelize) => {
    const TipoAtendProcesso = sequelize.define("tipoAtendProcesso", {
      in_cancelado: {
        type: Sequelize.BOOLEAN
      },
      id_operador: {
        type: Sequelize.INTEGER
      }
    });
  
    return TipoAtendProcesso;
  };