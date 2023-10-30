
const db = require("../models")
const Agendamento = db.agendamentos
const Op = db.Sequelize.Op;
exports.create = (req,res) => {

      Agendamento.create({
        IdPessoa: `${req.body.IdPessoa}`,
        cd_tipoAtend: `${req.body.cd_tipoAtend}`,
        dt_atendimento: `${req.body.dt_atendimento}`,
        dt_horaInicio: `${req.body.dt_horaInicio}`,
        dt_horaFim: `${req.body.dt_horaFim}`,
        ds_observacao: `${req.body.ds_observacao}`,
        id_operador: `${req.body.id_operador}`,
      })
}
exports.findAll = (req, res) => {
  const name = req.query.name;
  var condition = name ? { name: { [Op.like]: `%${name}%` } } : null;
 
  Agendamento.findAll({ where: condition})
    .then(data => {
      console.log(data)
      res.send(data);
    })
    .catch(data,err => {
      console.log(data)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });
}
  