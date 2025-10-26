let employees2 = [
  { name: "Alice", salary: 50000 },
  { name: "Bob", salary: 60000 }
];

// 1. Add new employee
employees2.push({ name: "Charlie", salary: 55000 });

// 2. Remove Alice
employees2 = employees2.filter(emp => emp.name !== "Alice");

// 3. Print final list
console.log("Final Employee List:");
console.log(employees2);
