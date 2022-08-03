class User {
  constructor(input) {
    this.email = input.email;
    this.phone = input.phone;
    this.password = input.password;
    this.category = input.category;
    this.created_at = input.created_at;
    this.updated_at = input.updated_at;
  }

  getUser() {
    return {
      email: this.email,
      phone: this.phone,
      password: this.password,
      category: this.category,
      created_at: this.created_at,
      updated_at: this.updated_at,
    };
  }
}
module.exports = User;
