
const db = require("../models")
const Paciente = db.pacientes;
const Op = db.Sequelize.Op;

exports.create = (req,res) => {
    if (!req.body.nome) {
        res.status(400).send({
          message: "Content can not be empty!"
        });
        return;
      }
      
      // Create a Tutorial
      Paciente.create({
        nome: `${req.body.nome}`,
        telefone_um: `${req.body.telefone1}`,
        telefone_dois: `${req.body.telefone2}`,
        dt_cancel: "01/01/2020",
        observacoes: `${req.body.observacoes}`
        
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
