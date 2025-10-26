let employees = [
  { name: "Vikram", department: "IT", salary: 50000, address: { city: "Hyderabad", state: "Telangana" } },
  { name: "Sneha", department: "HR", salary: 45000, address: { city: "Chennai", state: "Tamil Nadu" } },
  { name: "Ravi", department: "Finance", salary: 55000, address: { city: "Hyderabad", state: "Telangana" } }
];

console.log("Employees from Hyderabad:");
for (let emp of employees) {
  if (emp.address.city === "Hyderabad") {
    console.log(emp.name);
  }
}
