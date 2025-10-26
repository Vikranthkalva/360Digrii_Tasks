const user = { name: "Ravi", city: "Hyderabad", age: 28 };

// Destructure name and city
const { name, city } = user;
console.log("Name:", name);
console.log("City:", city);

// Create a new object using spread syntax
const newUser = { ...user, country: "India" };
console.log(newUser);
