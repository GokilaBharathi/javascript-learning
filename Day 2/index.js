function multiply(p1, p2) {
  const y = p1 * p2;
  return y;
}

const a1 = multiply(5, 7);
const a2 = multiply(10, 20);
const a3 = multiply(15, 11);
const a = a1 + a2 + a3;
console.log(a);

function addition(a, b) {
  return a + b;
}

const c = addition(5, 6);
console.log("Addition of 5, 6 is " + c);

const car = { type: "Fiat", model: "500", color: "white" };
console.log(car);
console.log(car.type);

const student = {
  name: "Revi",
  class: "10",
  section: "A",
  mark: { tamil: 70, english: 90, science: 90, social: 68, maths: 99 },
  description: function () {
    const sum =
      this.mark.tamil +
      this.mark.english +
      this.mark.science +
      this.mark.social +
      this.mark.maths;
    return this.name + " scored " + sum + "/500";
  },
};

function printStudent(st) {
  const sum =
    st.mark.tamil +
    st.mark.english +
    st.mark.science +
    st.mark.social +
    st.mark.maths;
  console.log(st.name + " scored " + sum + "/500");
}

printStudent(student);
console.log(student.description());

// table starts
for (let table = 1; table <= 4; table++) {
  if (table % 2 == 0) {
    for (let i = 1; i <= 5; i++) {
      console.log(table + " + " + i + " = " + (table + i));
    }
    console.log("-------------------------------------------");
  }
}
// table ends
