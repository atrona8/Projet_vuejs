// Importation du module express pour pouvoir l'utilisation
const express = require("express");
const conf = require("./config/db.config");
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json({ extended: false }));

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  next();
});

require("./routes/account.route")(app);

require("./routes/article.route")(app);

require("./routes/profil.route")(app);

require("./routes/transaction.route")(app);

require("./routes/user.route")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8089;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
