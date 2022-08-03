class Account {
  constructor(input, id_account = null) {
    this.balance = input.balance;
    this.currency = input.currency;
    this.userid = input.userid;
    this.id_account = id_account;
    this.created_at = input.created_at;
    this.updated_at = input.updated_at;
  }

  getAccount() {
    return {
      balance: this.balance,
      currency: this.currency,
      userid: this.userid,
      id_account: this.id_account,
      created_at: this.created_at,
      updated_at: this.updated_at,
    };
  }
}

module.exports = Account;
