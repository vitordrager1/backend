module.exports = app => {
    const paciente = require("../controllers/paciente.controller")
    const tutorials = require("../controllers/tutorial.controller");

    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", paciente.create); //<------------------------------------
  
    // Retrieve all Tutorials
    router.get("/pacientes", paciente.findAll);
    router.get("/", paciente.findAll)

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