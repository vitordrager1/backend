module.exports = app => {
    const paciente = require("../controllers/paciente.controller")
    const pessoa = require("../controllers/pessoa.controller")

    var router = require("express").Router();
  
    // Create a new Paciente
    //router.post("/",(pessoa.create,paciente.create))
    router.post("/",paciente.create); //<------------------------------------

    router.get("/pessoas", pessoa.findAll);

      // Retrieve a single Tutorial with id
   // router.get("/pessoas?name=", pessoa.findAll);

    //router.get("/tutorials", tutorials.findAll);
    // router.get("/pacientes", paciente.findAll) //<------------------------------------
    
    // Retrieve all published Tutorials
    // router.get("/published", tutorials.findAllPublished);
  
    // Retrieve a single Tutorial with id
    // router.get("/:id", tutorials.findOne);
  
    // Update a Tutorial with id
    // router.put("/:id", tutorials.update);
  
    // Delete a Tutorial with id
    // router.delete("/:id", tutorials.delete);
  
    // Delete all Tutorials
    // router.delete("/", tutorials.deleteAll);
  
    app.use('/api/pacientes', router);
  };