

interface Student {
  id: number;
  name: string;
  age: number;
  marks: number;
}

const sdts: Student[] = [
  { id: 1, name: "Azfar", age: 21, marks: 90 },
  { id: 2, name: "Ali", age: 22, marks: 75 },
  { id: 3, name: "Ahmed", age: 21, marks: 95 }
];


sdts.forEach((student) => {
  console.log(`ID: ${student.id}, Name: ${student.name}, Age: ${student.age}, Marks: ${student.marks}`);
});

const names: string[] = sdts.map((student) => {
  return student.name;
});

console.log(...names);

const highScorers = sdts.filter(
  student => student.marks >= 90
);

console.log(...highScorers);

const student = sdts.find(
  student => student.id === 2
);

console.log(student);

const totalMarks = sdts.reduce(
  (total, student) => {
    return total + student.marks;
  },
  0
);

console.log(totalMarks);

const hasTopStudent = sdts.some(
  student => student.marks >= 90
);

console.log(hasTopStudent);

const allPassed = sdts.every(
  student => student.marks >= 50
);

console.log(allPassed);


// it mutates the original array
const sortedStudents = [...sdts].sort(
  (a, b) => b.marks - a.marks
);

console.log(...sortedStudents);


//INTERFACES
interface User {
  id: number;
  name: string;
  phone?: string;
}

const user1: User = {
  id: 1,
  name: "Azfar",
  email: "xyx",
};

const user2: User = {
  id: 2,
  name: "Ali",
  phone: "03001234567",
  email: "xyx",
};

interface Admin extends User {
  role: string; 
};

//ENUMS
enum Role {
  ADMIN,
  USER,
  GUEST
}

const role: Role = Role.ADMIN;

console.log(role);

enum RoleString {
  ADMIN = "ADMIN",
  USER = "USER",
  GUEST = "GUEST"
}

//UNION TYPES
let id: string | number;

id = 101;
id = "USER-101";

function printId(id: string | number): void {
  console.log(id);
}

printId(101);
printId("USER-101");

//literal Types
type Status =
  | "pending"
  | "success"
  | "error";

let sts: Status;

sts = "success";

//INTERSECTION TYPES

type EmployeePerson = User & Student;

const eply: EmployeePerson = {
  name: "Azfar",
  marks: 90,
  id: 1,
  age: 21,
  email: "xyx",
};


//type narrowing

//typeof
function printValue(value: string | number): void {
  if (typeof value === "string") {
    console.log(value.toUpperCase());
  } else {
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

function makeSound(animal: Dog | Cat) {
  if (animal instanceof Dog) {
    animal.bark();
  } else {
    animal.meow();
  }
}

// in operator
interface Admin {
  name: string;
  permissions: string[];
}

interface User {
  name: string;
  email: string;
}

function printUser(user: Admin | User) {
  if ("permissions" in user) {
    console.log(user.permissions);
  } else {
    console.log(user.email);
  }
}

//type guards
function isString(value: unknown): value is string {
  return typeof value === "string";
}

const value: unknown = "Hello";

if (isString(value)) {
  console.log(value.toUpperCase());
}

//generics
function identity<T>(value: T): T {
  return value;
}

const numberValue = identity<number>(100);
const stringValue = identity<string>("Hello");

interface ApiResponse<T> {
  success: boolean;
  data: T;
}

const response: ApiResponse<User> = {
  success: true,
  data: {
    id: 1,
    name: "Azfar",
    email: "azfar@example.com"
  }
};

const studentResponse: ApiResponse<Student> = {
  success: true,
  data: {
    id: 1,
    name: "Azfar",
    marks: 95,
    age: 21
  }
};


//utliity types

//Partial every property of the type is optional
type PartialUser = Partial<User>;

//pick 
type UserPreview = Pick<User, "id" | "name">;

//omit
type PublicUser = Omit<User, "age">;

//required
type CompleteUser = Required<User>;

//record
type Scores = Record<string, number>;
