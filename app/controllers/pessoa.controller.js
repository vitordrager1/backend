
const db = require("../models")
const Pessoa = db.pessoas;
const Op = db.Sequelize.Op;

exports.create = (req,res) => {
    if (!req.body.nome) {
        res.status(400).send({
          message: "Content can not be empty!"
        });
        return;
      }
      
      // Create a Tutorial
      Pessoa.create({
        nome: `${req.body.nome}`,
        nr_contato: `${req.body.nrContato}`,
        nr_contatosec: `${req.body.nrContatoSec}`,
        ds_observacao: `${req.body.dsObservacao}`,
        id_operador: `${req.body.idOperador}`
      }
      );
      // console.log(paciente)
      // Save Tutorial in the database
      // Paciente.create(paciente)
      
}
exports.findAll = (req, res) => {
  const title = req.query.title;
  var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;

  Paciente.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });
}
