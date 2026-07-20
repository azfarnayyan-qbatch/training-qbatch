interface UserNew {
  id: number;
  name: string;
  createdAt: Date;
}

const u1: UserNew = { id: 1, name: "Ali", createdAt: new Date() };

const json = JSON.stringify(u1);
console.log(json); 

const parsed = JSON.parse(json);
console.log(parsed.createdAt instanceof Date); 

// Pretty print with indentation
console.log(JSON.stringify(u1, null, 2));

// Custom replacer — exclude a field
const noId = JSON.stringify(u1, (key, value) => (key === "id" ? undefined : value));
console.log(noId);

// Custom reviver — revive Date on parse
const revived = JSON.parse(json, (key, value) =>
  key === "createdAt" ? new Date(value) : value
);
console.log(revived.createdAt instanceof Date);


console.log("1: start");

setTimeout(() => {
  console.log("2: inside timeout (async)");
}, 0);

console.log("3: end");

console.log("A");

setTimeout(() => console.log("B (macrotask)"), 0);

Promise.resolve().then(() => console.log("C (microtask)"));

console.log("D");

// Output: A, D, C, B
// Microtasks (Promise.then) always run before the next macrotask (setTimeout),
// even if the setTimeout delay is 0.

