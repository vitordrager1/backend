// CONFIGURAR O SEQUELIZE

const dbConfig = require("../../config/db.config.js")
const Sequelize = require("sequelize")

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operatorsAliases: 0,
    timezone: "America/Sao_Paulo",
    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
    }
})
console.log(sequelize.options.timezone);
const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize

//db.tutorials = require("./tutorial.model.js")(sequelize, Sequelize)
db.pacientes = require("./paciente.model.js")(sequelize, Sequelize)
db.pessoas = require("./pessoa.model.js")(sequelize, Sequelize)
db.agendamentos = require("./agendamento.model.js")(sequelize, Sequelize)
db.tipoAtend = require("./tipoAtendimento.model.js")(sequelize, Sequelize)
db.atendimento = require("./atendimento.model.js")(sequelize, Sequelize)
db.tipoIntervencao = require("./tipoIntervencao.model.js")(sequelize, Sequelize)
db.tipoAtendente = require("./tipoAtendente.model.js")(sequelize, Sequelize)
db.atendente = require("./atendente.model.js")(sequelize, Sequelize)
module.exports = db;

