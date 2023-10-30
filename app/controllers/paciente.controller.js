
const db = require("../models")
const Paciente = db.pacientes;
const Pessoa = db.pessoas;
const Op = db.Sequelize.Op;
exports.create = (req,res) => {
    if (!req.body.nome) {
        res.status(400).send({
          message: "Content can not be empty!"
        });
        return;
      }
      Pessoa.create({
        nome: `${req.body.nome}`,
        nr_contato: `${req.body.nrContato}`,
        nr_contatosec: `${req.body.nrContatoSec}`,
        ds_observacao: `${req.body.dsObservacao}`,
        id_operador: `${req.body.idOperador}`
      }
      );
      // Create a Paciente
      Paciente.create({
        //dt_inativacao: `${req.body.dtInativacao}`,
        id_operador: `${req.body.idOperador}`,     
      }
      );
      // console.log(paciente)
      // Save Tutorial in the database
      // Paciente.create(paciente)
}
exports.findAll = (req, res) => {
  const name = req.query.name;
  var condition = name ? { name: { [Op.like]: `%${name}%` } } : null;
 
  Paciente.findAll({ where: condition})
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
