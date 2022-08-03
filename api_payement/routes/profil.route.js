module.exports = app => {
    const profils = require("../controllers/profil.controller.js");
    var router = require("express").Router();
    // Create a new profil
    router.post("/", profils.create);
    // Retrieve all profils
    router.get("/", profils.findAll);

    // Retrieve a single profil with id
    router.get("/:id", profils.findOne);
    // Update a profil with id
    router.put("/:id", profils.update);
    // Delete a profil with id
    router.delete("/:id", profils.delete);

    app.use('/api/profils', router);
  };