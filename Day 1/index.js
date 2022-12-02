let x;
const y = 3.14;
let z;
x = 5;
x = 8;
z = x + y;

console.log(z);

let firstName = "Gokila";
let lastName = "Bharathi";

age = 2;

//  age = age + 'ten';
age **= 3;

console.log(firstName + " " + lastName);

console.log("My age is: " + age);

console.log(4 === "4");

let mark = 20;
let grade;
// let grade = mark > 80 ? "A" : mark > 60 ? "B" : mark >= 35 ? "C" : "E";
if (mark > 80) {
  grade = "A";
} else if (mark > 60) {
  grade = "B";
} else {
  grade = "E";
}

console.log("My Grade is: " + grade);
for (let table = 1; table <= 10; table++) {
  if (table % 2 == 0) {
    for (let i = 1; i <= 10; i++) {
      console.log(table + " X " + i + " = " + table * i);
    }
    console.log("-------------------------------------------");
  }
}
