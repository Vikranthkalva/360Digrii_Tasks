let employees = [
  { name: "Alice", salary: 50000 },
  { name: "Bob", salary: 60000 },
  { name: "Charlie", salary: 55000 }
];

function analyzeSalaries(employees) {
  let totalSalary = 0;
  let highestPaid = employees[0];

  for (let i = 0; i < employees.length; i++) {
    totalSalary += employees[i].salary;

    if (employees[i].salary > highestPaid.salary) {
      highestPaid = employees[i];
    }
  }

  console.log("Total Salary:", totalSalary);
  console.log("Highest Paid Employee:", highestPaid.name, "with salary", highestPaid.salary);
}

analyzeSalaries(employees);
