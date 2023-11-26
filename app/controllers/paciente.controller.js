
const db = require("../models")
const Paciente = db.pacientes;
const Pessoa = db.pessoas;
const Op = db.Sequelize.Op;
exports.create = (req,res) => {

      // Pessoa.create({
      //   nome: `${req.body.nome}`,
      //   nr_contato: `${req.body.nrContato}`,
      //   nr_contatosec: `${req.body.nrContatoSec}`,
      //   ds_observacao: `${req.body.dsObservacao}`,
      //   id_operador: `${req.body.idOperador}`
      // }
      // );
      // Create a Paciente
      Paciente.create({
        //dt_inativacao: `${req.body.dtInativacao}`,
        IdPessoa: `${req.body.IdPessoa}`,
        id_operador: `${req.body.id_operador}`,     
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
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });
}
