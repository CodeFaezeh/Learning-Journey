// 137. First-Class and Higher-Order Functions
//Exercise 1
/*🧪 Task:
Write a higher-order function called repeatTwice
It should take a function as an argument and call it two times.

Then, define a function called sayHi that logs "Hello!" to the console.

Pass sayHi into repeatTwice so it logs "Hello!" two times. */
function repeatTwice(fn, message, n) {
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
function repeatNTimes(fn, message, name, n) {
  for (let i = 0; i < n; i++) {
    console.log(fn(message, name));
  }
}
repeatNTimes(sayHi, "Hello", "Arun", 6);
///********************/
// 138. Functions Accepting Callback Functions
console.log("start");
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
greeting("welcome")("Henry");
// 139. Functions Returning Functions
// 140. The call and apply Methods
