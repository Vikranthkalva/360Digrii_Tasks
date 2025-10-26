let products = [
  { name: "Laptop", price: 60000 },
  { name: "Mobile", price: 20000 },
  { name: "Tablet", price: 30000 }
];
products.sort((a, b) => a.price - b.price);
let productNames = products.map(p => p.name);
console.log("Product Names:", productNames);

