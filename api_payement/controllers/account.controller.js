const conf = require("../config/db.config");

const db = conf.db


exports.create = (req, res) => {
    let sql = `INSERT INTO ACCOUNT(balance, currency, userid)  values(?)`;
    let values = [
        req.body.balance,
        req.body.currency,
        req.body.userid

    ];
    db.query(sql, [values], function(err, data, fields) {
      if (err) return res.send(err)
      res.json({
        status: 200,
        data,
        message: "New account added successfully"
      })
    })
};

exports.findAll = (req, res) => {
    let sql = `SELECT * FROM account`;
    db.query(sql, function(err, data, fields) {
      if (err) return res.send(err)
      res.json({
        status: 200,
        data,
        message: "account lists retrieved successfully"
      })
    })
};

exports.findOne = (req, res) => {
    let sql = `SELECT account.* FROM account INNER JOIN user on email = userid WHERE email = ?`;
    let values = [
        req.params.id,

    ];
    db.query(sql, [values], function(err, data, fields) {
      if (err) return res.send(err)
      res.json({
        status: 200,
        data,
        message: "account "+values[0]+" retrieved successfully"
      })
    })

};

exports.update = (req, res) => {
    let sql = `UPDATE account set balance = ?  WHERE id_account = ? `;
    let values = [
        req.body.balance,
        req.params.id

    ];
    db.query(sql, values, function(err, data, fields) {
      if (err) return res.send(err)
      res.json({
        status: 200,
        data,
        message: "account "+values[0]+" updated successfully"
      })
    })
};

exports.delete = (req, res) => {
    let sql = `DELETE FROM account WHERE userid = ? `;
    let values = [
      req.params.id,

    ];
    db.query(sql, [values], function(err, data, fields) {
      if (err) return res.send(err)
      res.json({
        status: 200,
        message: "account "+values[0]+" deleted successfully"
      })
    })
};


