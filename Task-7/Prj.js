let orders = [
  { orderId: 1, customer: "John", items: [{ name: "Pen", price: 20 }, { name: "Book", price: 100 }] },
  { orderId: 2, customer: "Ravi", items: [{ name: "Pencil", price: 10 }, { name: "Bag", price: 500 }] }
];

let highestSpender = { customer: "", total: 0 };

for (let order of orders) {
  let total = 0;
  for (let item of order.items) {
    total += item.price;
  }
  console.log(`${order.customer} -> ${total}`);

  if (total > highestSpender.total) {
    highestSpender = { customer: order.customer, total: total };
  }
}

console.log(`Highest spender: ${highestSpender.customer}`);
