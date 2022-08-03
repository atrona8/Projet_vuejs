const conf = require("../config/db.config");

const db = conf.db;
const config = conf.tokenConf;

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { isUndefined, isNull } = require("mathjs");

exports.create = async (req, res) => {
  let sql = `INSERT INTO USER(email, phone, password, category)  values(?)`;
  let values = [
    req.body.email,
    req.body.phone,
    await bcrypt.hash(req.body.password, 10),
    req.body.category,
  ];
  db.query(sql, [values], function (err, data, fields) {
    if (err) return res.send(err);
    if (req.body.password != req.body.password_confirmation) {
      res.json({
        status: 400,
        message: "password and password_confirmation must be identical",
      });
      return;
    }
    res.json({
      status: 200,
      data,
      message: "New user added successfully",
    });
  });
};

exports.findAll = (req, res) => {
  let sql = `SELECT * FROM user`;
  db.query(sql, function (err, data, fields) {
    if (err) return res.send(err);
    res.json({
      status: 200,
      data,
      message: "User lists retrieved successfully",
    });
  });
};

exports.connect = async (req, res) => {
  const userc = {
    email: req.body.email,
    password: req.body.password,
  };

  const token = jwt.sign(userc, config.secret, { expiresIn: config.tokenLife });

  let sql = `SELECT * from user WHERE  email = ?`;
  let values = [req.body.email];

  db.query(sql, values, async function (err, data, fields) {
    if (err) return res.send(err);
    if ( isUndefined(data[0]) ) {
      console.log("password : " + req.body.password);
      console.log("email : " + req.body.email);

      res.json({
        status: 400,
        error: true,
      })

    } else {
      
      let result = await bcrypt.compare(req.body.password,data[0]["password"]);
      
      if (result) {
        res.json({
          status: 201,
          token: token,
          user: data[0],
          error: false,
          message: "User " + values[0] + " connected successfully",
        });
      } else {
        res.json({
          status: 400,
          error: true,
          data,
          message: "Wrong identifiers",
        });
      }
    }
  });
};

exports.findOne = (req, res) => {
  let sql = `SELECT * FROM user WHERE email = ?`;
  let values = [req.params.id];
  db.query(sql, [values], function (err, data, fields) {
    if (err) return res.send(err);
    res.json({
      status: 200,
      data,
      message: "User " + values[0] + " retrieved successfully",
    });
  });
};

exports.update = (req, res) => {
  let sql = `UPDATE user set email = ? phone = ?, password = ?  WHERE email = ? `;
  let values = [
    req.params.email,
    req.body.phone,
    req.body.password,
    req.params.id,
  ];
  db.query(sql, [values], function (err, data, fields) {
    if (err) return res.send(err);
    res.json({
      status: 200,
      data,
      message: "User " + values[0] + " updated successfully",
    });
  });
};

exports.delete = (req, res) => {
  let sql = `DELETE FROM user WHERE email = ? `;
  let values = [req.params.id];
  db.query(sql, [values], function (err, data, fields) {
    if (err) return res.send(err);
    res.json({
      status: 200,
      message: "User " + values[0] + " deleted successfully",
    });
  });
};
