let carName1 = "Volvo XC60"; // Double quotes
let carName2 = "Volvo XC60"; // Single quotes

let answer1 = "It's alright";
let answer2 = "He is called 'Johnny'";
let answer3 = 'He is called "Johnny"';

let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
console.log("Length of " + text + " is " + text.length);
console.log(text.length);

let text1 = "We are the so-called 'Vikings' from the north.";
console.log(text1);

let text2 = "The character\v is called backslash\f.";
console.log(text2);

let text3 = "My Name is GokilaBharathi";
let text3Arr = text3.split("");
console.log(text3Arr);

function checkPalidromeText(text) {
  const temp = text; // AMMA
  text = text.split(""); // ['A','M','M','A']
  text = text.reverse(); // ['A','M','M','A']
  text = text.join(""); // AMMA
  if (temp == text) {
    console.log(temp + " is Palindrome Text");
  } else {
    console.log(temp + " is not Palindrome Text");
  }
}

checkPalidromeText("AMMA"); // Function Call
checkPalidromeText("Name");
const myName = "Gokila Bharathi";
console.log("My Name is " + myName + ".");
console.log(`My Name is ${myName}.`);
