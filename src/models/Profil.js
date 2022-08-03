class Profil {
  constructor(input) {
    this.lastname = input.lastname;
    this.firstname = input.firstname;
    this.country = input.country;
    this.age = input.age;
    this.userid = input.userid;
    this.created_at = input.created_at;
    this.updated_at = input.updated_at;
  }

  getProfil() {
    return {
      lastname: this.lastname,
      firstname: this.firstname,
      country: this.country,
      age: this.age,
      userid: this.userid,
      created_at: this.created_at,
      updated_at: this.updated_at,
    };
  }
}

module.exports = Profil;
