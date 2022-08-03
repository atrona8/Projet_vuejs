const conf = require("../config/db.config");

const db = conf.db
exports.create = (req, res) => {
    let sql = `INSERT INTO TRANSACTION(identifier, amount, currency, taxes, fees, addedfees, quantity, userid, articleid, sellerid)  values(? ,? ,? ,? ,? ,? ,? ,? ,? ,?)`;
    let values = [
        req.body.identifier,
        req.body.amount,
        req.body.currency,
        req.body.taxes,
        req.body.fees,
        req.body.addedfees,
        req.body.quantity,
        req.body.userid,
        req.body.articleid,
        req.body.sellerid,
    ];
    db.query(sql, values, function(err, data, fields) {
      if (err) return res.send(err)
      res.json({
        status: 200,
        data,
        message: "New transaction added successfully"
      })
    })
};

exports.findAll = (req, res) => {
    let sql = `SELECT * FROM transaction`;
    db.query(sql, function(err, data, fields) {
      if (err) return res.send(err)
      res.json({
        status: 200,
        data,
        message: "transaction lists retrieved successfully"
      })
    })
};

exports.findOne = (req, res) => {
    let sql = `SELECT transaction.* FROM transaction  WHERE identifier = ?`;
    let values = [
      req.params.id,

    ];
    db.query(sql, [values], function(err, data, fields) {
      if (err) return res.send(err)
      res.json({
        status: 200,
        data,
        message: "transaction "+values[0]+" retrieved successfully"
      })
    })

};

exports.update = (req, res) => {
    let sql = `UPDATE transaction set amount = ? currency = ?, taxes = ?, fees = ?, quantity = ?  WHERE identifier = ? `;
    let values = [
       
        req.body.amount,
        req.body.currency,
        req.body.taxes,
        req.body.fees,
        req.body.addedfees,
        req.body.quantity,

        req.params.identifier,
    ];
    db.query(sql, values, function(err, data, fields) {
      if (err) return res.send(err)
      res.json({
        status: 200,
        data,
        message: "transaction "+req.params.identifier+" updated successfully"
      })
    })
};
/*
exports.delete = (req, res) => {
    let sql = `DELETE FROM transaction WHERE userid = ? `;
    let values = [
      req.params.userid,

    ];
    db.query(sql, [values], function(err, data, fields) {
      if (err) return res.send(err)
      res.json({
        status: 200,
        message: "transaction "+values[0]+" deleted successfully"
      })
    })
};
*/

