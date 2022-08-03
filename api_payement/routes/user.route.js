module.exports = app => {
  const users = require("../controllers/user.controller.js");
  const tokenverif = require("../controllers/tockenCheker.js");
    var router = require("express").Router();

    // verify user's token
    router.get("/token", tokenverif.verif);
    // Create a new user
    router.post("/", users.create);
    // Retrieve all users
    router.get("/", users.findAll);
    // Identify a user
    router.post("/connect", users.connect);

    // Retrieve a single user with id
    router.get("/:id", users.findOne);
    // Update a user with id
    router.put("/:id", users.update);
    // Delete a user with id
    router.delete("/:id", users.delete);

    app.use('/api/users', router);
  };