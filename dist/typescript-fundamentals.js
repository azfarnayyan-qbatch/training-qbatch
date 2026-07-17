"use strict";
// const vs let
const company = "ABC Tech";
let age = 22;
// Primitive Types
let userName = "Azfar";
let isStudent = true;
let salary = 95000;
let nothing = null;
let notAssigned = undefined;
// Type Inference
let city = "Lahore"; // inferred as string
let year = 2026; // inferred as number
let userId = 101;
const employee = {
    id: 1,
    name: "Azfar",
    department: "Software Engineering",
    address: {
        city: "Lahore",
        country: "Pakistan",
    },
};
console.log(employee);
// Typed Array
const numbers = [10, 20, 30, 40];
// Array of Objects
const students = [employee];
// Tuple
const user = [1, "Ali"];
console.log(numbers);
console.log(students);
console.log(user);
// for
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}
// while
let count = 0;
while (count < 3) {
    console.log(count);
    count++;
}
// do...while
let x = 0;
do {
    console.log(x);
    x++;
} while (x < 2);
// for...of
for (const number of numbers) {
    console.log(number);
}
// for...in
for (const key in employee) {
    console.log(key);
}
// Function Type
function greet(name) {
    return `Hello ${name}`;
}
// Optional Parameter
function introduce(name, age) {
    console.log(name, age);
}
// Default Parameter
function square(num = 2) {
    return num * num;
}
// Rest Parameter
function add(...nums) {
    return nums.reduce((sum, num) => sum + num, 0);
}
// Arrow Function
const multiply = (a, b) => a * b;
console.log(greet("Azfar"));
introduce("Ali");
console.log(square());
console.log(add(1, 2, 3, 4, 5));
console.log(multiply(5, 6));
// Object Destructuring
const { name: employeeName, department } = employee;
console.log(employeeName, department);
// Array Destructuring
const [first, second] = numbers;
console.log(first, second);
// Spread Operator
const copiedNumbers = [...numbers];
const updatedEmployee = {
    ...employee,
    department: "AI Engineering",
};
console.log(copiedNumbers);
console.log(updatedEmployee);
console.log(Object.keys(employee));
console.log(Object.values(employee));
console.log(Object.entries(employee));
