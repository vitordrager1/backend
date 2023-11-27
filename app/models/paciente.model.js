//AQUI CRIAMOS UMA TABELA NO BANCO POR MEIO DO SEQUELIZE
//O SEQUELIZE TUTORIAL.MODEL.JS REPRESENTA UMA TABELA NO MYSQL
// module.exports = (sequelize, Sequelize) => {
//     const Paciente = sequelize.define("paciente", {
//         nome: {
//         type: Sequelize.STRING
//         },
//         telefone_um: {
//         type: Sequelize.STRING
//         },
//         telefone_dois: {
//         type: Sequelize.STRING
//         },
//         dt_cancel: {
//         type: Sequelize.DATE
//         },
//         observacoes: {
//         type: Sequelize.STRING
//         }
//     });

//     return Paciente;
//   };
const moment = require("moment");

module.exports = (sequelize, Sequelize) => {
	const Paciente = sequelize.define("paciente", {
		IdPessoa: {
			type: Sequelize.INTEGER,
			primaryKey: true,
		},
		dt_inativacao: {
			type: Sequelize.DATE,
			// defaultValue: moment(new Date('01/01/2001'), 'DD/MM/YYYY').format('YYYY-MM-DD HH:mm:ss'),
		},
		id_operador: {
			type: Sequelize.INTEGER,
		},
	});
	return Paciente;
};
