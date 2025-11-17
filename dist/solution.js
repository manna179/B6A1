"use strict";
// let value: number|string|boolean;
Object.defineProperty(exports, "__esModule", { value: true });
const formatValue = (value) => {
    if (typeof value === "number") {
        return value * value;
    }
    else if (typeof value === "string") {
        return value.toUpperCase();
    }
    else if (typeof value === "boolean") {
        return !value;
    }
    else {
        return;
    }
};
const getLength = (input) => {
    if (typeof input === "string") {
        return input.length;
    }
    else if (Array.isArray(input)) {
        return input.length;
    }
    else {
        return;
    }
};
class Person {
    name;
    age;
    constructor(name, age) {
        (this.name = name), (this.age = age);
    }
    getDetails() {
        return `'Name: ${this.name}, Age: ${this.age}'`;
    }
}
function filterByRating(items) {
    return items.filter((item) => item.rating >= 4);
}
function filterActiveUsers(users) {
    return users.filter(user => user.isActive === true);
}
function printBookDetails(book) {
    console.log(`Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${book.isAvailable ? "Yes" : "No"} `);
}
//# sourceMappingURL=solution.js.map