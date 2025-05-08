"use strict";
function formatString(input1, input2) {
    if (input2 || input2 === undefined) {
        return input1.toUpperCase();
    }
    else {
        return input1.toLowerCase();
    }
}
const res1 = formatString("Hello");
const res2 = formatString("Hello", true);
const res3 = formatString("Hello", false);
// console.log(res1, res2, res3)
const books = [
    { title: "Book A", rating: 4.5 },
    { title: "Book B", rating: 3.2 },
    { title: "Book C", rating: 5.0 },
];
function filterByRating(items) {
    return items.filter((item) => item.rating >= 4);
}
const filteredBooks = filterByRating(books);
// console.log(filteredBooks)
function concatenateArrays(...arrays) {
    const result = [];
    for (const array of arrays) {
        result.push(...array);
    }
    return result;
}
const resultOfConcatArray = concatenateArrays([1, 2], [3, 4]);
const resultOfConcatArray2 = concatenateArrays(["a", "b"], ["c"]);
// console.log(resultOfConcatArray2)
// Create a Vehicle class with private make and year properties and a getInfo() method.
// Create a Car class extending Vehicle, adding a private model property and a getModel() method.
class Vehicle {
    constructor(make, year) {
        this.make = make;
        this.year = year;
        this.make = make;
        this.year = year;
    }
    getInfo() {
        return `Make: ${this.make}, Year: ${this.year}`;
    }
}
class Car extends Vehicle {
    constructor(make, year, model) {
        super(make, year);
        this.model = model;
        this.model = model;
    }
    getModel() {
        return `Model: ${this.model}`;
    }
}
const myCar = new Car("Toyota", 2020, "Corolla");
// console.log(myCar.getInfo());
// console.log(myCar.getModel());
function processValue(value) {
    return typeof value === "string" ? value.length : value * 2;
}
const resultProcessNumber = processValue("hello");
const resultProcessNumber2 = processValue(10);
function getMostExpensiveProduct(products) {
    if (products.length === 0) {
        return null;
    }
    let mostExpensive = products[0];
    for (const product of products) {
        if (product.price > mostExpensive.price) {
            mostExpensive = product;
        }
    }
    return mostExpensive;
}
const products = [
    { name: "Pen", price: 10 },
    { name: "Notebook", price: 25 },
    { name: "Bag", price: 50 },
];
const mostExpensiveProduct = getMostExpensiveProduct(products);
// console.log(mostExpensiveProduct);
