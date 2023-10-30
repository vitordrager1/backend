//-------------------RELACIONAMENTOS---------------------

//Realizar os imports

const db = require("../models")
const Atendente = db.atendentes
const Pessoa = db.pessoas
const Paciente = db.pacientes
const Agendamento = db.agendamentos
const TipoAtendimento = db.tipoAtend

async function Associations () {

//[INICIO] - RELACIONAMENTO PESSOA 1 - 1 ATENDENTE
    Atendente.belongsTo(Pessoa, {
        foreignKey: {
            name: 'IdPessoa', // Nome da coluna que será a chave estrangeira
            allowNull: false,
            primaryKey: true, // A chave estrangeira também é a chave primária
        },
    })
//[FIM] - RELACIONAMENTO PESSOA 1 - 1 ATENDENTE

//[INICIO] - RELACIONAENTO PESSOA 1 - 1 PACIENTE
    Paciente.belongsTo(Pessoa, {
        foreignKey: {
            name: 'IdPessoa', // Nome da coluna que será a chave estrangeira
            allowNull: false,
            primaryKey: true, // A chave estrangeira também é a chave primária
        },
    })
//[FIM] - RELACIONAENTO PESSOA 1 - 1 PACIENTE

//[INICIO] - RELACIONAENTO AGENDAMENTO N - 1 TIPO ATENDIMENTO
    TipoAtendimento.hasMany(Agendamento, {
    foreignKey: {
        name: 'cd_tipoAtend', // Nome da coluna que será a chave estrangeira
        allowNull: false,
        },
    })
    Agendamento.belongsTo(TipoAtendimento, {
    foreignKey: {
        name: 'cd_tipoAtend', // Nome da coluna que será a chave estrangeira
        allowNull: false,
        },
    })

    Paciente.hasMany(Agendamento, {
        foreignKey: {
            name: 'IdPessoa', // Nome da coluna que será a chave estrangeira
            allowNull: false,
        },
    })
    Agendamento.belongsTo(Paciente, {
        foreignKey: {
            name: 'IdPessoa', // Nome da coluna que será a chave estrangeira
            allowNull: false,
        },
    })

//[FIM] - RELACIONAENTO PESSOA 1 - 1 PACIENTE
}

module.exports = Associations