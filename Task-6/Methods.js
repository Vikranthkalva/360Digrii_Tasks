let calculator = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  multiply: (a, b) => a * b,
  divide: (a, b) => (b !== 0 ? a / b : "Error: Division by zero")
};

console.log("Addition:", calculator.add(5, 3));
console.log("Subtraction:", calculator.subtract(5, 3));
console.log("Multiply:", calculator.multiply(5, 3));
console.log("Division:", calculator.divide(5, 0));
