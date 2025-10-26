let person = {
  firstName: "John",
  lastName: "Doe",
  getFullName: function() {
    return "Full Name: " + this.firstName + " " + this.lastName;
  }
};

console.log(person.getFullName());
