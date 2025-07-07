'use strict';
// 136. How Passing Arguments Works: Value vs. Reference
/*
//Example 1
const obj = {
  objName: 'Marian',
};
const referencingchange = function (something) {
  something.objName = 'Lily';
  console.log(something);
};
referencingchange(obj); //Lily
console.log(obj); //Lily

//Example 2
let obj2 = { name: 'Ravi' };

function modify(o) {
  o.name = 'Arun';
  console.log('Inside function: ', o.name);
}

modify(obj); //Arun
console.log('Outside function: ', obj2.name); //Arun

//Example 3
let person = { name: 'Ravi' };

function reassignReference(o) {
  // Reassigning the reference
  o = { name: 'Arun' };
  console.log('Inside function: ', o.name);
}

reassignReference(obj); // Arun
console.log('Outside function: ', person.name); //Ravi
// In this example
// The function receives a reference to the original object.
// However, reassigning o creates a new object, leaving the original object untouched.
*/

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
repeatTwice(sayHi, 'Hello');
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
