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
  mark: { tamil: 50, english: 80, science: 90, social: 68, maths: 99 },
};

function printStudent(st) {
    const mark = st.mark.tamil + st.mark.english + st.mark.science + st.mark.social + st.mark.maths;
  console.log(st.name + " scored 200/500");
}

printStudent(student);
