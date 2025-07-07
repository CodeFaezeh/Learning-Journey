// 137. First-Class and Higher-Order Functions
//Exercise 1
/*🧪 Task:
Write a higher-order function called repeatTwice
It should take a function as an argument and call it two times.

Then, define a function called sayHi that logs "Hello!" to the console.

Pass sayHi into repeatTwice so it logs "Hello!" two times. */
function repeatTwice(fn, message) {
  console.log(fn(message));
  console.log(fn(message));
}
function sayHi(m) {
  return m;
}
repeatTwice(sayHi, "Hello");
//Exercise 2
function createMultiplier(factor) {
  return function (number) {
    return number * factor;
  };
}
console.log(createMultiplier(3)(5));
///********************/
// 138. Functions Accepting Callback Functions
// 139. Functions Returning Functions
// 140. The call and apply Methods
