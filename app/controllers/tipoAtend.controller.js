
const db = require("../models")
const TipoAtend = db.tipoAtend;
const Op = db.Sequelize.Op;

exports.create = (req,res) => {
    // if (!req.body.nome) {
    //     res.status(400).send({
    //       message: "Content can not be empty!"
    //     });
    //     return;
    //   }
      
      // Create a Tutorial
      TipoAtend.create({
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
  const name = req.query.name;
  var condition = name ? { nome: { [Op.like]: `%${name}%` } } : null;

  TipoAtend.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Ocorreu um erro ao recuperar os dados."
      });
    });
}
