"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let students = [
    {
        id: 1,
        name: "Ali",
        age: 21,
        department: "Software Engineering",
        marks: [85, 90, 88],
        address: {
            city: "Lahore",
            country: "Pakistan",
        },
    },
    {
        id: 2,
        name: "Sara",
        age: 22,
        department: "Computer Science",
        marks: [92, 95, 90],
        address: {
            city: "Islamabad",
            country: "Pakistan",
        },
    },
    {
        id: 3,
        name: "Ahmed",
        age: 20,
        department: "Software Engineering",
        marks: [75, 80, 78],
        address: {
            city: "Karachi",
            country: "Pakistan",
        },
    },
];
// Access and update object properties
console.log(students[0].name);
students[0].age = 22;
students[0].address.city = "Rawalpindi";
console.log(students[0]);
for (let i = 0; i < students.length; i++) {
    console.log(students[i].name);
}
let index = 0;
while (index < students.length) {
    console.log(students[index].id);
    index++;
}
for (const student of students) {
    console.log(student.department);
}
for (const key in students[0]) {
    console.log(key);
}
// Search student by ID
function findStudentById(id) {
    for (const student of students) {
        if (student.id === id) {
            return student;
        }
    }
    return undefined;
}
// Search student by name
function findStudentByName(name) {
    for (const student of students) {
        if (student.name.toLowerCase() === name.toLowerCase()) {
            return student;
        }
    }
    return undefined;
}
console.log(findStudentById(2));
console.log(findStudentByName("Ali"));
// Calculate average marks
function calculateAverageMarks(student) {
    let total = 0;
    for (const mark of student.marks) {
        total += mark;
    }
    return total / student.marks.length;
}
// Display average marks
for (const student of students) {
    const average = calculateAverageMarks(student);
    console.log(student.name + ": " + average);
}
// Find top-performing student
function findTopStudent(students) {
    let topStudent = students[0];
    for (const student of students) {
        if (calculateAverageMarks(student) >
            calculateAverageMarks(topStudent)) {
            topStudent = student;
        }
    }
    return topStudent;
}
const topStudent = findTopStudent(students);
console.log("Top student:", topStudent.name);
// Object destructuring
const firstStudent = students[0];
const { name: studentName, department, address: { city }, } = firstStudent;
console.log(studentName);
console.log(department);
console.log(city);
// Array destructuring
const [firstMark, secondMark] = firstStudent.marks;
console.log(firstMark);
console.log(secondMark);
// Spread operator copy and update object
const updatedStudent = {
    ...firstStudent,
    department: "Artificial Intelligence",
};
console.log(updatedStudent);
// Spread operator - copy array
const copiedStudents = [...students];
console.log(copiedStudents);
// Object.keys()
console.log(Object.keys(firstStudent));
// Object.values()
console.log(Object.values(firstStudent));
// Object.entries()
console.log(Object.entries(firstStudent));
