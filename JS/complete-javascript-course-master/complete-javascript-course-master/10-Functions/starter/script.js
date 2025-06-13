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
// 138. Functions Accepting Callback Functions
// 139. Functions Returning Functions
// 140. The call and apply Methods
