module.exports = app => {
    const transactions = require("../controllers/transaction.controller.js");
    var router = require("express").Router();
    // Create a new transaction
    router.post("/", transactions.create);
    // Retrieve all transactions
    router.get("/", transactions.findAll);

    // Retrieve a single transaction with id
    router.get("/:id", transactions.findOne);
    // Update a transaction with id
    router.put("/:id", transactions.update);
 

    app.use('/api/transactions', router);
  };