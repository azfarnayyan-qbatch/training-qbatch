"use strict";
const sdts = [
    { id: 1, name: "Azfar", age: 21, marks: 90 },
    { id: 2, name: "Ali", age: 22, marks: 75 },
    { id: 3, name: "Ahmed", age: 21, marks: 95 }
];
sdts.forEach((student) => {
    console.log(`ID: ${student.id}, Name: ${student.name}, Age: ${student.age}, Marks: ${student.marks}`);
});
const names = sdts.map((student) => {
    return student.name;
});
console.log(...names);
const highScorers = sdts.filter(student => student.marks >= 90);
console.log(...highScorers);
const student = sdts.find(student => student.id === 2);
console.log(student);
const totalMarks = sdts.reduce((total, student) => {
    return total + student.marks;
}, 0);
console.log(totalMarks);
const hasTopStudent = sdts.some(student => student.marks >= 90);
console.log(hasTopStudent);
const allPassed = sdts.every(student => student.marks >= 50);
console.log(allPassed);
// it mutates the original array
const sortedStudents = [...sdts].sort((a, b) => b.marks - a.marks);
console.log(...sortedStudents);
const user1 = {
    id: 1,
    name: "Azfar",
    email: "xyx",
};
const user2 = {
    id: 2,
    name: "Ali",
    phone: "03001234567",
    email: "xyx",
};
;
//ENUMS
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["USER"] = 1] = "USER";
    Role[Role["GUEST"] = 2] = "GUEST";
})(Role || (Role = {}));
const role = Role.ADMIN;
console.log(role);
var RoleString;
(function (RoleString) {
    RoleString["ADMIN"] = "ADMIN";
    RoleString["USER"] = "USER";
    RoleString["GUEST"] = "GUEST";
})(RoleString || (RoleString = {}));
//UNION TYPES
let id;
id = 101;
id = "USER-101";
function printId(id) {
    console.log(id);
}
printId(101);
printId("USER-101");
let sts;
sts = "success";
const eply = {
    name: "Azfar",
    marks: 90,
    id: 1,
    age: 21,
    email: "xyx",
};
//type narrowing
//typeof
function printValue(value) {
    if (typeof value === "string") {
        console.log(value.toUpperCase());
    }
    else {
        console.log(value.toFixed(2));
    }
}
//instanceof
class Dog {
    bark() {
        console.log("Woof");
    }
}
class Cat {
    meow() {
        console.log("Meow");
    }
}
function makeSound(animal) {
    if (animal instanceof Dog) {
        animal.bark();
    }
    else {
        animal.meow();
    }
}
function printUser(user) {
    if ("permissions" in user) {
        console.log(user.permissions);
    }
    else {
        console.log(user.email);
    }
}
//type guards
function isString(value) {
    return typeof value === "string";
}
const value = "Hello";
if (isString(value)) {
    console.log(value.toUpperCase());
}
//generics
function identity(value) {
    return value;
}
const numberValue = identity(100);
const stringValue = identity("Hello");
const response = {
    success: true,
    data: {
        id: 1,
        name: "Azfar",
        email: "azfar@example.com"
    }
};
const studentResponse = {
    success: true,
    data: {
        id: 1,
        name: "Azfar",
        marks: 95,
        age: 21
    }
};
