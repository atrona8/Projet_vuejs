const conf = require("../config/db.config");

const db = conf.db


exports.create = (req, res) => {
    let sql = `INSERT INTO ARTICLE(reference, unitprice, quantity, totalprice, sellerid)  values(?)`;
    let values = [
      req.body.reference,
      req.body.unitprice,
      req.body.quantity,
      req.body.totalprice,
      req.body.sellerid,

    ];
    db.query(sql, [values], function(err, data, fields) {
      if (err) return res.send(err)
      res.json({
        status: 200,
        data,
        message: "New article added successfully"
      })
    })
};

exports.findAll = (req, res) => {
    let sql = `SELECT * FROM article`;
    db.query(sql, function(err, data, fields) {
      if (err) return res.send(err)
      res.json({
        status: 200,
        data,
        message: "article lists retrieved successfully"
      })
    })
};

exports.findOne = (req, res) => {
    let sql = `SELECT article.* FROM article INNER JOIN user on email = sellerid WHERE email = ?`;
    let values = [
      req.params.id,

    ];
    db.query(sql, [values], function(err, data, fields) {
      if (err) return res.send(err)
      res.json({
        status: 200,
        data,
        message: "article "+values[0]+" retrieved successfully"
      })
    })

};

exports.update = (req, res) => {
    let sql = `UPDATE article set reference =? , unitprice = ?, quantity = ?, totalprice = ?  WHERE id_article = ? `;
    let values = [
        req.body.reference,
        req.body.unitprice,
        req.body.quantity,
        req.body.totalprice,
        req.params.id,

    ];
    db.query(sql, values, function(err, data, fields) {
      if (err) return res.send(err)
      res.json({
        status: 200,
        data,
        message: "article "+values[0]+" updated successfully"
      })
    })
};

exports.delete = (req, res) => {
    let sql = `DELETE FROM article WHERE id_article = ? `;
    let values = [
      req.params.id,

    ];
    db.query(sql, [values], function(err, data, fields) {
      if (err) return res.send(err)
      res.json({
        status: 200,
        message: "article "+values[0]+" deleted successfully"
      })
    })
};


