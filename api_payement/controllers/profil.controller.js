const conf = require("../config/db.config");

const db = conf.db


exports.create = (req, res) => {
    let sql = `INSERT INTO PROFIL(firstname, lastname, country, age, userid) value(?, ?, ?, ?, ?)`;
    
    let values = [
        req.body.firstname,
        req.body.lastname,
        req.body.country,
        req.body.age,
        req.body.userid,

    ];
    db.query(sql, values, function(err, data, fields) {
      if (err) return res.send(err)
      console.log(data)
      res.json({
        status: 200,
        data,
        message: "New profil added successfully"
      })
    })
};

exports.findAll = (req, res) => {
    let sql = `SELECT * FROM profil`;
    db.query(sql, function(err, data, fields) {
      if (err) return res.send(err)
      res.json({
        status: 200,
        data,
        message: "profil lists retrieved successfully"
      })
    })
};

exports.findOne = (req, res) => {
    let sql = `SELECT profil.* FROM profil INNER JOIN user on email = userid WHERE email = ?`;
    let values = [
      req.params.id,

    ];
    db.query(sql, [values], function(err, data, fields) {
      if (err) return res.send(err)
      res.json({
        status: 200,
        data,
        message: "profil "+values[0]+" retrieved successfully"
      })
    })

};

exports.update = (req, res) => {
    let sql = `UPDATE profil set firstname = ? lastname = ?, country = ?, age = ?  WHERE id_profil = ? `;
    let values = [
        req.body.firstname,
        req.body.lastname,
        req.body.country,
        req.body.age,
        req.params.id,

    ];
    db.query(sql, values, function(err, data, fields) {
      if (err) return res.send(err)
      res.json({
        status: 200,
        data,
        message: "profil "+values[0]+" updated successfully"
      })
    })
};

exports.delete = (req, res) => {
    let sql = `DELETE FROM profil WHERE userid = ? `;
    let values = [
      req.params.id,

    ];
    db.query(sql, [values], function(err, data, fields) {
      if (err) return res.send(err)
      res.json({
        status: 200,
        message: "profil "+values[0]+" deleted successfully"
      })
    })
};


