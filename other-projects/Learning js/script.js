"use strict";

// 137. First-Class and Higher-Order Functions
//Exercise 1
/*🧪 Task:
Write a higher-order function called repeatTwice
It should take a function as an argument and call it two times.

Then, define a function called sayHi that logs "Hello!" to the console.

Pass sayHi into repeatTwice so it logs "Hello!" two times. */
/*function repeatTwice(fn, message, n) {
  console.log(fn(message, n));
  console.log(fn(message, n));
}
function sayHi(m, name) {
  return `${m},${name}`;
}
repeatTwice(sayHi, "Hello", "Arun");
//Exercise 2
function createMultiplier(factor) {
  return function (number) {
    return number * factor;
  };
}
console.log(createMultiplier(3)(5));
//Exercise 3
/*🎯 Assignment:
✅ Write (in code) a higher-order function called repeatNTimes

It should:

Take a function as an argument

Take a number n as an argument

Call that function n times */
/*function repeatNTimes(fn, message, name, n) {
  for (let i = 0; i < n; i++) {
    console.log(fn(message, name));
  }
}
repeatNTimes(sayHi, "Hello", "Arun", 6);*/
///********************/
// 138. Functions Accepting Callback Functions
/*console.log("start");
setTimeout(function () {
  console.log("inside timeout");
}, 1000);
console.log("end");
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting},${name}`);
  };
};
greet("hello")("Mave");
// const greeting = (greetText) => {
//   return (name) => {
//     console.log(`${greetText},${name}`);
//   };
// };
const greeting = (greetText) => (name) => console.log(`${greetText},${name}`);
greeting("welcome")("Henry");*/
// 139. Functions Returning Functions
// 140. The call and apply Methods
/*
const iranAir = {
  airLine: "Iran Air",
  iataCode: "IA",
  bookings: [],
  book(name, flightNum) {
    console.log(
      `${name} booked a seat on ${this.airLine} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({
      name: `${name}`,
      flightNum: `${this.iataCode}${flightNum}`,
    });
  },
};
iranAir.book("Ghabi", 456);
console.log(iranAir);

// const book = iranAir.book;

const homaAir = {
  airLine: "Homa Air",
  iataCode: "HA",
  bookings: [],
};
//Call Method
// book.call(homaAir, "Jadi", 658);
// console.log(homaAir);
iranAir.book.call(homaAir, "Yasi", 583);
console.log(homaAir);

//Apply Method
const flightData = ["YooHan", 869];
// iranAir.book.apply(homaAir, flightData);
iranAir.book.call(homaAir, ...flightData);
console.log(homaAir);
*/
// 141. The Bind Method
/*
const tax = (rate, value) => value + (value * rate) / 100;
console.log(tax(10, 200));
const taxGlobal = tax.bind(null, 23);
console.log(taxGlobal(200));
const taxVal = (rate) => (value) => value + value * (rate / 100);
console.log(taxVal(23)(200));

const iranAir = {
  iranAir: "Iran Air",
};
// bind useCase in addEventLister for this referal
iranAir.planes = 300;
iranAir.buyPlanes = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};
document
  .querySelector(".buy")
  .addEventListener("click", iranAir.buyPlanes.bind(iranAir));
*/
// 142. CHALLENGE #1
// Coding Challenge #1

/* 
Let's build a simple poll app!

A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.

Here are your tasks: 

1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

HINT: Use many of the tools you learned about in this and the last section 😉

BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

GOOD LUCK 😀
*/
/*
const poll = {
  question: "What is your favourite programming language?",
  options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
  // This generates [0, 0, 0, 0]. More in the next section 😃
  answers: new Array(4).fill(0),
};
poll.registerNewAnswer = function () {
  let userInput = Number(
    prompt(
      `${this.question}\n${this.options.join("\n")}\n(Write option number)`
    )
  );
  // check if the input is valid or loop until user enter valid number
  while (userInput > this.options.length || typeof userInput === "string") {
    alert(`⚠️Please enter a valid Number`);
    userInput = Number(
      prompt(
        `${this.question}\n${this.options.join("\n")}\n(Write option number)`
      )
    );
  }
  if (userInput) {
    this.answers[userInput]++;
  }
  this.displayResults();
  this.displayResults("string");
};
poll.displayResults = function (type = "array") {
  if (type === "array") {
    console.log(this.answers);
  } else if (type === "string") {
    console.log(`Poll Result : ${this.answers.join(",")}`);
  }
};
document
  .querySelector(".poll")
  .addEventListener("click", poll.registerNewAnswer.bind(poll));

const data1 = [5, 2, 3];
const data2 = [1, 5, 3, 9, 6, 1];
poll.displayResults.call({ answers: data1 }, "string");
poll.displayResults.call({ answers: data2 });
*/

// 143. Immediately Invoked Function Expressions (IIFE)
// 144. Closures
// Coding Challenge #2

/* 
This is more of a thinking challenge than a coding challenge 🤓

Take the IIFE below and at the end of the function, attach an event listener that changes the color of the selected h1 element ('header') to blue, each time the BODY element is clicked. Do NOT select the h1 element again!

And now explain to YOURSELF (or someone around you) WHY this worked! Take all the time you need. Think about WHEN exactly the callback function is executed, and what that means for the variables involved in this example.

GOOD LUCK 😀
*/
/*
(function () {
  const header = document.querySelector("h1");
  header.style.color = "red";
  document
    .querySelector("body")
    .addEventListener("click", () => (header.style.color = "blue"));
})();
*/

// 149. Simple Array Methods
//Algorithms
const findLongestSubstring = function (s) {
  let maxLength = 0;
  const vowels = new Set(["a", "e", "o", "u", "i"]);
  // loop to find the uniqe substring
  //define a set for a current substring
  for (let i = 0; i < s.length; i++) {
    const subString = new Set();
    //*find how many vowels do we have */
    let vowelCounts = 0;
    // loop over following character (based on choosenChar position) to add to sub Stirng
    for (let j = i; j < s.length; j++) {
      const char = s[j];
      // check if the current character is in substring or not?!
      if (subString.has(char)) {
        break;
      } else {
        subString.add(char);

        //check if the character is in vowel set or not?
        if (vowels.has(char)) {
          vowelCounts++;
        }
        if (vowelCounts > 0 && vowelCounts % 2 === 0) {
          // define current Length to update max Length (otherwise max length would be infinte)
          let currentLength = subString.size;
          maxLength = Math.max(maxLength, currentLength);
        }
      }
    }
    //⚠️⚠️⚠️this way is wrong here for checking if statement of vowel counts we must check it during the substring expanding
    // if (vowelCounts > 0 && vowelCounts % 2 === 0) {
    //   // define current Length to update max Length (otherwise max length would be infinte)
    //   let currentLength = subString.size;
    //   maxLength = Math.max(maxLength, currentLength);
    // }
    console.log(subString);
  }
  console.log(maxLength);
};
findLongestSubstring("akfsefki");
