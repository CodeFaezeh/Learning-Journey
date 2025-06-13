'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  order(indexStarter, indexMain) {
    console.log(this.starterMenu[indexStarter], this.mainMenu[indexMain]);
  },
  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(
      `you orderder pizza with ${mainIngredient} and ${otherIngredients}`
    );
  },
};

//108. Destructuring Arrays
/*
const numberArr = [100, 49, 55];
const a = numberArr[0];
const b = numberArr[1];
const c = numberArr[2];
console.log(a, b, c);
console.log('Example of destructuring');
const [x, y, z] = numberArr;
console.log(x, y, z);
function newArr(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(arr[i] * 2);
  }
  return result;
}
console.log(newArr(numberArr));
const userOne = {
  name: 'Faezeh',
  lastName: 'Shabanneja',
  hobby: [
    'tennis',
    'yoga',
    'walking',
    'talking',
    'shopping',
    'movies',
    'programming',
  ],
  favoriteMovies: ['Spider Man', 'BatMan', 'Avengers'],
  abstract: function (hobbyIndex, movieIndex) {
    return `${this.name} hobby is ${
      this.hobby[hobbyIndex - 1]
    } and favorite movie is ${this.favoriteMovies[movieIndex - 1]} `;
  },
};
let [firstHobby, secondHobby] = userOne.hobby;
console.log(`first hobby is ${firstHobby} and second hobby is ${secondHobby}`);
let thirdHobby;
[firstHobby, , thirdHobby] = userOne.hobby;
console.log(`third hobby is ${thirdHobby}`);
//Switching the hobbies
[firstHobby, secondHobby] = [secondHobby, firstHobby];
console.log(
  `SWITCHING 🆕 destruchering method:first hobby is ${firstHobby} and second hobby is ${secondHobby}`
);
let main = firstHobby;
main = secondHobby;
secondHobby = firstHobby;
console.log(
  `SWITCHING 👵 Old version :first hobby is ${main} and second hobby is ${secondHobby}`
);
console.log(userOne.abstract(4, 1));
//nested array 
const newNumberArr = [4, 5, [8, 6]];
let [i, , [j, k]] = newNumberArr;
console.log(i, j, k);
const [p, q, r] = [2, 56];
console.log(p, q, r);
*/

// 110. Destructuring Objects
/*
const userTwo = {
  name: 'Milad',
  age: '29',
  job: 'Software Engineer',
  hobby: ['hikking', 'dancing', 'music', 'movies'],
  friends: ['Matin', 'Nima', 'Ehsan', 'Fazel'],
};
const { name, age, playground } = userTwo;
console.log(name, age, playground);
//set variable names 
const { name: userName, age: userAge, hobby: userHobbies } = userTwo;
console.log(userName, userAge, userHobbies);
//define defalut value
const { lastName = 'lalala', job, friends } = userTwo;
console.log(lastName);
console.log(userTwo);
//Mutating
let a = 56;
let b = 888;
console.log(`a is ${a}, b is ${b}`);
const obj = { a: 23, b: 66, c: 14 };
({ a, b } = obj);
console.log(`a & b after mutating ${a},${b}`);
//Nested Objects
const { openingHours } = restaurant;
const { fri } = openingHours;
console.log(fri);
const {
  thu: { open, close },
} = openingHours;
console.log(open, close);
*/
// 111. The Spread Operator (...)
/*
// make new arr based on the previous arr
const arr = [1, 2, 3];
// old and bad method
const newArr = [100, 300, arr[0], arr[1], arr[2]];
//OR
const newArr1 = function (arr) {
  let finalArr = [100, 300];
  for (let i = 0; i < arr.length; i++) {
    finalArr.push(arr[i]);
  }
  return finalArr;
};
console.log(` method 1 : ${newArr1(arr)}`);
// spread operator way
const newArr2 = [600, 59, ...arr];
const nestedNewArr2 = [600, 59, arr];

console.log(` spread operator usage 1`);
console.log(` method 2 :${newArr2}`);
console.log(` method 2 whitout spread operator :${nestedNewArr2}`);

console.log(` spread operator usage 2`);
console.log(...newArr2);

const newMainMenu = [...restaurant.mainMenu, 'meat balls', 'salmon kebab'];
console.log(newMainMenu);

console.log(` spread operator usage 3 : shallow copy and merge arrays`);
const mainMenuCopy = [...restaurant.mainMenu];
console.log(mainMenuCopy);
const restaurantMenu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(restaurantMenu);

console.log(
  ` spread operator usage 4 (for iterables: strings,arrays,maps ,sets but not objects)`
);
const str = 'Name';
// here spread operator only work when we build new arr(letters here) or pass it to a function
const letters = [...str];
console.log(letters);
console.log(...str);

// spread operators for objects
const restaurantCopy = { ...restaurant };
console.log(restaurantCopy);
restaurantCopy.name = 'Maman JOOni';
console.log(restaurant.name, restaurantCopy.name);
*/
// 112. Rest Pattern and Parameters
/*
//spread operator
const arr = [1, 2, ...[3, 5, 6]];

// first use case: destructring
// rest patter (on the left)
const [a, b, ...c] = [1, 2, 3, 4, 5, 6];
console.log(a, b, c);
console.log(`usage 1 rest patter:  c equals ${c}`);
const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);
// obj rest
const { thu, ...restDays } = restaurant.openingHours;
console.log(thu, restDays);
console.log(`thu is ${thu}, and restDays is ${restDays}`);
// second use casr : function
function add(...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
}
add(4, 5, 2, 8);
add(1, 5, 9);
add(7);
*/
// Assignments 109-112
/*
// first assignment
const users = [
  {
    userName: 'Sara',
    userRole: 'designer',
    userSkills: ['Figma', 'Photoshop'],
  },
  {
    userName: 'Ali',
    userRole: 'student',
    userSkills: [],
  },
  {
    userName: 'Nima',
    userRole: 'backend developer',
    userSkills: ['Node.js', 'Express', 'MongoDB'],
  },
];
const displayUsersDetailsLoops = function (users) {
  //loop between array properties
  for (let i = 0; i < users.length; i++) {
    // console.log(users[i]);
    const userInfo = function ({ userName, userRole, userSkills }) {
      if (userSkills.length === 0) {
        console.log(`${userName} is a ${userRole} with no skills`);
      } else {
        console.log(
          `${userName} is a ${userRole} who is skilled in ${userSkills}`
        );
      }
    };
    userInfo(users[i]);
  }
};
displayUsersDetailsLoops(users);
// second assignment
const frontend = ['HTML', 'CSS', 'JavaScript'];
const backend = ['Node.js', 'Express'];
const devTools = ['Git', 'GitHub', 'Vite'];
const fullStack = [...frontend, ...backend, ...devTools];
const [firstTool, , thirdTool, ...otherTools] = fullStack;
console.log(`first tool is ${firstTool} and third tool is ${thirdTool}`);
const printWishlist = function ({ userName, whishlistTools }) {
  console.log(`${userName} whises to learn : ${whishlistTools}`);
};
const user = {
  userName: 'faezeh',
  whishlistTools: [firstTool, thirdTool],
};
printWishlist(user);
*/
// 113. Short Circuiting (&& and ||)
/*
// if the first value is truty value it will print the first else it would check the second one and so on
// OR
console.log(3 || 'me');
console.log('' || 'me');
console.log(true || 'me');
console.log(null || 'me');
console.log(undefined || 'me');
console.log(undefined || null);
console.log(undefined || null || true);
console.log(undefined || null || 0 || '' || 23);
//  Short circuting usage one :
const guest1 = restaurant.guest ? restaurant.guest : 10;
console.log(guest1);
const guest2 = restaurant.guest || 5;
console.log(guest2);

// AND
console.log(3 && null);
console.log(true && 'me');

if (restaurant.orderPizza) {
  restaurant.orderPizza('mushroom', 'garlic', 'tomato');
}
// practival usage of And
restaurant.orderPizza && restaurant.orderPizza('spinach', 'mint');
*/
// 114. The Nullish Coalescing Operator (??)
/*
restaurant.numGuests = 0; //falsy value
// falsy values = 0 , null , undefined
let guest = restaurant.numGuests || 10;
console.log(guest);
// nulish values = null , undefined
guest = restaurant.numGuests ?? 10;
console.log(guest);
*/
// 115. Logical Assignment Operators
/*
// Assignments
const techCategories = {
  frontend: ['HTML', 'CSS', 'JavaScript'],
  backend: [],
  tools: null,
  design: ['Figma', 'XD'],
};

// 1. Set a default for tools if it's null or undefined
// 2. Use && to log only non-empty categories
// 3. Use || or ?? to give fallback values
// 4. Create a function `printTechSummary` that goes through each category and logs:
//    - "Frontend includes: HTML, CSS, JavaScript"
//    - "Backend has no tools yet"
//    - etc.
techCategories.tools ??= [];
const printTechSummary = function (techStuff) {
  // const {frontend,backend,tools,design,...othersStuf} = techStuff;
  // // frontend && console.log(`Frontend includes : ${frontend}`);
  // // backend && console.log(`Backend includes : ${backend}`);
  // if (frontend){

  // }
  // const techStuffArr = { ...techStuff };
  // for (let i = 0; i < techStuffArr.length; i++) {
  //   techStuffArrProperties = [...techStuffArr[i]];
  //   techStuffArr[i] &&
  //     console.log(`${techStuffArr[i]} includes ${techStuffArrProperties}`);
  // }
  // for (const properties in techStuff) {
  //   console.log(properties);
  //   for (let i = 0; i < properties.length; i++) {
  //     console.log(properties[i]);
  //   }
  // }
  ///////////CORECT ANSWER////////
  for (const [key, value] of Object.entries(techStuff)) {
    if (value.length > 0) {
      console.log(`${key} includes ${value}.`);
    } else {
      console.log(`${key} has no tools yet.`);
    }
  }
  ///////////CORECT ANSWER////////
};
printTechSummary(techCategories);
*/
// 117. Looping Arrays: The for-of Loop
/*
const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
//loop v1
// for (let i = 0; i < menu.length; i++) {
//   console.log(menu[i]);
// }
// the for-of loop
for (const menuItem of menu) console.log(menuItem);
for (const item of menu.entries()) console.log(item);
for (const item of menu.entries()) console.log(`${item[0] + 1}: ${item[1]}`);
for (const [index, element] of menu.entries())
  console.log(`${index + 1} : ${element}`);
*/

// 118. Enhanced Object Literals
// 119. Optional Chaining (?.)
/*
if (restaurant.openingHours.mon) console.log(restaurant.openingHours.mon.open);
//for preventing eror if restauran.openingHours.mon exist or no
console.log(restaurant.openingHours.mon?.open);
// care that for optional chaining to NOT hit enter between ? and .
console.log(restaurant.openingHours?.mon?.open);
console.log(restaurant.openingHours?.thu?.open);

const days = ['sun', 'mon', 'thu', 'wed', 'tur', 'fri', 'sat'];
for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`On ${day} restaurant is opened at ${open}`);
}

// Methods
console.log(restaurant.order?.(0, 2) ?? 'This method does not exist');
console.log(
  restaurant.orderPizza?.('cheese', 'tomato') ?? 'This method does not exist'
);
console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist');
//FIXME: why in cosole it log both when both are truely value??

// Arrays
// const users = [
//   {
//     name: 'faezeh',
//     gamil: 'faezeh@gmail.com',
//   },
// ];
const users = [];
console.log(users[0]?.name ?? 'user array is empty');
*/

// 120. Looping Objects: Object Keys, Values, and Entries
// learn with assignment
/*
// Exercise 1:
// Exercise 2:
const teamData = {
  frontend: [
    {
      name: 'Faezeh',
      role: 'Dev',
      skills: ['HTML', 'CSS'],
      wishlist: ['React'],
    },
    { name: 'Sara', role: 'Intern' }, // no skills or wishlist
  ],
  backend: [{ name: 'Ali', role: 'Engineer', skills: ['Node.js'] }],
  design: [],
};
///Answer
let skilledMembers = 0;
// first loop: loop teams
for (const [team, memberList] of Object.entries(teamData)) {
  if (memberList.length > 0) {
    // second loop : if a team has member, loop members
    for (const {
      name: memberName = 'Anonymous',
      role,
      skills = [],
      wishlist = [],
    } of memberList) {
      if (skills.length > 0) {
        console.log(`${memberName} is skilled in ${skills}`);
        skilledMembers = skilledMembers + 1;
      } else {
        console.log(`${memberName} has no skills yet`);
      }

      wishlist.length > 0
        ? console.log(`${memberName} wishes to learn ${wishlist}`)
        : console.log(`${memberName} has no wishlist yet`);
    }
  } else {
    console.log(`⚠️ No members in ${team} team yet.`);
  }
}
console.log(` Total skilled members:  ${skilledMembers}`);
console.log('Assignment 2');
////////////
// Exercise 3
const roleGroup = function (teamData) {
  let membersRoleGroup = {};
  for (const [team, teamList] of Object.entries(teamData)) {
    if (teamList.length > 0) {
      for (const {
        name: memberName = 'Anonymous',
        role,
        skills,
        wishlist,
      } of teamList) {
        if (role) {
          if (!membersRoleGroup[role]) {
            membersRoleGroup[role] = [];
          }
          membersRoleGroup[role].push({
            name: memberName,
            skills: skills,
            wishlist: wishlist,
          });
        }
      }
    } else {
      console.log(`⚠️ No members in ${team} team yet.`);
    }
  }
  console.log(membersRoleGroup);
};
roleGroup(teamData);
// 🧑 Role: Dev
// → Faezeh: HTML, CSS
//Exercise 4:
const miniTeamData = {
  marketing: [
    { name: 'Amin', role: 'Strategist', skills: ['SEO', 'Email'] },
    { name: 'Niloofar', role: 'Strategist', skills: ['Market Analysis'] },
  ],
  support: [
    { name: 'Reza', role: 'Customer Agent' },
    { name: 'Hamed', role: 'Customer Agent', skills: ['Communication'] },
  ],
};
const groupBasedRoles = function (data) {
  let groupRoles = {};
  for (const [team, membersList] of Object.entries(data)) {
    if (membersList && membersList.length > 0) {
      for (const { name: memberName, role, skills } of membersList.values()) {
        if (!groupRoles[role]) groupRoles[role] = [];
        groupRoles[role].push({
          name: memberName,
          skills: skills,
        });
      }
    } else {
      console.log(`${team} team has no member yet.`);
    }
  }
  // {role1:[{obj1},{obj2}]}
  //insider obj -> {name,skills}
  //format output
  // 🧑 Role: Dev
  // → Faezeh: HTML, CSS
  for (const [role, memberListRole] of Object.entries(groupRoles)) {
    for (const { name: memberName, skills } of memberListRole) {
      if (skills && skills.length > 0) {
        console.log(`\n 🧑 role: ${role} \n -> ${memberName}: ${skills}`);
      } else {
        console.log(`${memberName} has no skills yet.`);
      }
    }
  }
};
groupBasedRoles(miniTeamData);

// Exercise 5:
const teamsData = {
  design: [
    { name: 'Lily', skills: ['Figma', 'UX', 'UI'] },
    { name: 'Jon', skills: ['Figma'] },
  ],
  engineering: [
    { name: 'Sara', skills: ['JavaScript', 'React'] },
    { name: 'Ali', skills: ['JavaScript', 'React', 'Node'] },
  ],
};

const teamsSkillsData = function (data) {
  // data structure of teamsSkillsData
  // teamsSkillsData :{
  //   team1:{
  //     skills:[skills];
  //     members:[members];
  //   }
  //   team2:{
  //       ...
  //   }
  // }
  let teamsSkillsData = {};
  for (const [team, memberList] of Object.entries(data)) {
    if (memberList.length > 0) {
      teamsSkillsData[team] = {};
      teamsSkillsData[team].members = [];
      teamsSkillsData[team].skills = [];

      for (const { name, skills } of memberList.values()) {
        teamsSkillsData[team].skills.push(...skills);
        // check if the member has 2 or more skills
        if (skills.length > 1) {
          teamsSkillsData[team].members.push(name);
        }
      }
    } else {
      console.log(`team ${team} has no members yet.`);
    }
  }
  console.log(teamsSkillsData);

  //define code below: for each team inside teamSkills var we define a set. and log the output
  for (const [team, { skills, members }] of Object.entries(teamsSkillsData)) {
    teamsSkillsData[team].skills = new Set(skills);
    //FORMAT OUTPUT:
    // 🧑 Team: Design
    // → Unique Skills: Figma, UX, UI
    // → Members with 2+ skills: 1
    console.log(
      `\n 🧑 Team: ${team} \n -> Unique Skills: ${[
        ...teamsSkillsData[team].skills,
      ]} \n → Members with 2+ skills: ${members.length}`
    );
  }
};
teamsSkillsData(teamsData);
*/

//Exercise 6
const projectTeam = {
  design: [
    { name: 'Saba', skills: ['Figma', 'Illustrator'] },
    { name: 'Kaveh', skills: ['Figma'] },
  ],
  frontend: [
    { name: 'Arman', skills: ['HTML', 'CSS'] },
    { name: 'Sahar', skills: ['CSS', 'JS', 'React'] },
  ],
  backend: [
    { name: 'Ali', skills: ['Node', 'DB'] },
    { name: 'Fatemeh', skills: ['DB'] },
  ],
};
// 122. Sets
/*
const orderSet = new Set([
  'pasta',
  'pizza',
  'pasta',
  'pasta',
  'rice',
  'rissoto',
  'rice',
]);
console.log(`ordersSet is ${[...orderSet]}`);
const orderSetSize = orderSet.size;
console.log(`orderset size is ${orderSetSize} `);

const string = new Set('Maryam');
console.log(string);
console.log([...string]);
*/
// 123. New Operations to Make Sets Useful!
/*
const italianFoods = new Set([
  'pasta',
  'gnocchi',
  'tomatoes',
  'olive oil',
  'garlic',
  'basil',
]);

const mexicanFoods = new Set([
  'tortillas',
  'beans',
  'rice',
  'tomatoes',
  'avocado',
  'garlic',
]);
const commonFoods = italianFoods.intersection(mexicanFoods);
console.log(`Intersection:${[...commonFoods]}`);

const fusionFoods = italianFoods.union(mexicanFoods);
console.log(`Unions : ${[...fusionFoods]}`);
*/
// 124. Maps: Fundamentals
// 125. Maps: Iteration
/*
const question = new Map([
  ['question', 'What is the best programming language?'],
  [1, 'C'],
  [2, 'Python'],
  [3, 'Javascript'],
  ['valid options', 1],
  ['valid options', 2],
  ['valid options', 3],
  ['correct', 2],
  [true, "Well done,you're right👌"],
  [false, "That's not true😭😭😭😭"],
]);

console.log(question.get('question'));
for (const [key, value] of question) {
  if (typeof key === 'number') {
    console.log(`Option ${key}: ${value}`);
  }
}
const answer = Number(prompt('Choose the option:'));
console.log(answer);
// if (answer === question.get('correct')) {
//   console.log(question.get(true));
// } else {
//   console.log(question.get(false));
// }
console.log(question.get(answer === question.get('correct')));
*/

// 127. CHALLENGE #3
// Coding Challenge #3

/* 
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL

GOOD LUCK 😀
*/
/*
const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);
// ####Answer 1:
let events = [...new Set(gameEvents.values())];
console.log(events);

//####Answer 2:
gameEvents.delete(64);
// console.log(gameEvents);

// ####Answer 3:
//output format:
// "An event happened, on average, every 9 minutes"
// let averageList = {};
// for (const events of gameEvents.values()) {
//   // console.log(minute, event);
//   if (!averageList[events]) {
//     averageList[events] = {};
//     averageList[events].times = 0;

//     averageList[events].averageTime;
//   }
//   averageList[events].times += 1;
//   averageList[events].averageTime = 90 / averageList[events].times;
// }
// console.log(averageList);
// // data structure averageList
// // let averageList = {
// //   events1:{
// //     times = Number;
// //     averageTime = 90 / times;
// //   }
// // }
// for (const [events, { times, averageTime }] of Object.entries(averageList)) {
//   console.log(
//     `An ${events} happened, on average, every ${averageTime} minutes`
//   );
// }
const totalTime = [...gameEvents.keys()].pop();
const eventTimes = gameEvents.size;
console.log(
  `An event happened, on average, every ${totalTime / eventTimes} minutes`
);
// ####Answer 4
for (const [minutes, events] of gameEvents) {
  if (minutes > 0 && minutes < 45) {
    console.log(`[FIRSR HALf] ${minutes}: ${events}`);
  } else {
    console.log(`[Second HALf] ${minutes}: ${events}`);
  }
}
*/

// 128. Working With Strings - Part 1
// 129. Working With Strings - Part 2
// 130. Working With Strings - Part 3
/*
const captilizeName = function (name) {
  const nameArr = name.split(' ');
  // console.log(nameArr);
  let newNameArr = [];
  for (const n of nameArr) {
    newNameArr.push(n[0].toUpperCase() + n.slice(1));
  }
  // newNameArr.join(' ');
  console.log(newNameArr.join(' '));
};
captilizeName('mary ann mark tim');
*/

///////////////////////////////////////
// Coding Challenge #4

/*
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

Afterwards, test with your own test data!

GOOD LUCK 😀

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

const btn = document.querySelector('button');

btn.addEventListener('click', () => {
  const text = document.querySelector('textarea').value;
  // take each line of text as an seprate value
  const lines = text.split('\n');
  // CODE BELOW DEFINE:make a data structure in listWords which contains each line words as an array
  let listWords = [];

  for (const line of lines) {
    const words = line.toLowerCase().trim().split('_');
    listWords.push(words);
  }
  // CODE BELOW DEFINE: uppercase second up to more words of listWords array(for camelCase)
  for (const words of listWords) {
    for (let i = 1; i < words.length; i++) {
      words[i] = words[i][0].toUpperCase() + words[i].slice(1);
    }
  }
  // CODE BELOW DEFINE: wrap all of the individual inner array of listWords into a final version
  let listCamelCaseWords = [];
  for (const words of listWords) {
    listCamelCaseWords.push(words.join(''));
  }
  // CODE BELOW DEFINE:output
  for (const [index, word] of listCamelCaseWords.entries()) {
    console.log(`${word.padEnd(20)}${'✅'.repeat(index + 1)}`);
  }
});
*/

///////////////////////////////////////
// String Methods Practice

const flightsAirline =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)
//////////
const flightsArr = flightsAirline.split('+');
for (let flight of flightsArr.values()) {
  console.log(flight);
  console.log(flight.split(';'));
  let [type, origin, destination, time] = flight.split(';');
  const output = `${type.startsWith('_Delayed') ? '🔴' : ' '}${type.replaceAll(
    '_',
    ' '
  )} from ${origin.slice(0, 3).toUpperCase()} to ${destination
    .slice(0, 3)
    .toUpperCase()} (${time.replace(':', 'h')})`.padStart(40);
  console.log(output);
}
console.log(flightsArr);

/////
