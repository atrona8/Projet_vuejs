class Article {
  constructor(input, id_article = null) {
    this.unitprice = input.unitprice;
    this.quantity = input.quantity;
    this.totalprice = input.totalprice;
    this.sellerid = input.sellerid;
    this.reference = input.reference;
    this.created_at = input.created_at;
    this.updated_at = input.updated_at;
    this.id_article = id_article;
  }

  getArticle() {
    return {
      unitprice: this.unitprice,
      quantity: this.quantity,
      totalprice: this.totalprice,
      sellerid: this.sellerid,
      reference: this.reference,
      created_at: this.created_at,
      updated_at: this.updated_at,
      id_article: this.id_article,
    };
  }
}

module.exports = Article;
