class Transaction {
  constructor(input, identifier = null) {
    this.status = input.status;
    this.amount = input.amount;
    this.taxes = input.taxes;
    this.currency = input.currency;
    this.fees = input.fees;
    this.addedfees = input.addedfees;
    this.quantity = input.quantity;
    this.userid = input.userid;
    this.articleid = input.articleid;
    this.sellerid = input.sellerid;
    this.created_at = input.created_at;
    this.updated_at = input.updated_at;
    this.identifier = identifier;
  }

  getTransaction() {
    return {
      status: this.status,
      amount: this.amount,
      taxes: this.taxes,
      currency: this.currency,
      created_at: this.created_at,
      updated_at: this.updated_at,
      fees: this.fees,
      addedfees: this.addedfees,
      quantity: this.quantity,
      userid: this.userid,
      articleid: this.articleid,
      sellerid: this.sellerid,
      identifier: this.identifier,
    };
  }
}

module.exports = Transaction;
