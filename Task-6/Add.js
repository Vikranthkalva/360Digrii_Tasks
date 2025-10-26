let Car = {
    brand : "Audi",
    model : "A6",
    price : 550000
}

console.log("Before adding new property:");
for(let key in Car){
    console.log(key + ": " + Car[key]);
}

console.log("\nAfter adding new property:");
Car.fuelType = "Petrol";
for(let key in Car){
    console.log(key + ": " + Car[key]);
}

console.log("\nAfter modifying existing property:");
Car.price = 600000;
for(let key in Car){
    console.log(key + ": " + Car[key]);
}

console.log("\nAfter deleting a property:");
delete Car.model;  
for(let key in Car){
    console.log(key + ": " + Car[key]);
} 
