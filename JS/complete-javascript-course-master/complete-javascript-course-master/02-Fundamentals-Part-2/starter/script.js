//Strict Mode
/*
"use strict";
let hasDriversLicence = false;
const passTask = true;

if (passTask) hasDriversLicence = true;
if (hasDriversLicence) console.log("I can drive :D");

//const interface = "Audio";
//const private = 534;
//const if = 23;
*/

//functions
/*
function logger() {
    console.log("My name is Faeze");
}

//calling / running / invoking fuctions
logger();
logger();
logger();
logger();
//apples and oranges are parameters and input data
function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
console.log(fruitProcessor(5, 0));

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

function welcomming(name) {
    const phrase = `Hello ${name}, what's up?`
    return phrase;
}

console.log(welcomming("Faeze"));
console.log(welcomming("Matin"));

function messaging(name) {
    console.log(`Good afternoon ${name}`);
}

messaging("Ali");
messaging("Arezoo");
console.log(messaging("Hilma"));

function changingType(num) {
    const adad = Number(num);
    return adad;
}
console.log(changingType("23"));
console.log(changingType("1065"));


const num2 = Number("28");
console.log(num2);
*/

//Function Declarations vs. Function Expressions
/*
//declaration
function calcAge1(birthYear) {
    return 2037 - birthYear;
}
const age1 = calcAge1(1999);


//expression
const calAge2 = function (birthYear) {
    return 2037 - birthYear;
}
const age2 = calAge2(1999);
console.log(age1, age2);
*/

//Arrow Functions
/*
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1999);
console.log(age3);

const yearsUntilRetirment = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirment = 65 - age;
    return `${firstName} retires in ${retirment} years.`;
}

console.log(yearsUntilRetirment(1999, "Faeze"));
console.log(yearsUntilRetirment(1988, "Bob"));
*/

//Functions Calling Other Functions
/*
function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);
    const juice = `Juice with ${applePieces} apple pieces and ${orangePieces} orange pieces`;
    return juice
}

const readyJuice = fruitProcessor(2, 3);
console.log(readyJuice);
*/

/*const calcAge = function (birthYear) {
    return 2037 - birthYear;
}

const yearsUntilRetirment = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    /*let retirments;
     if (age < 65) {
         retirments = 65 - age;
     } else {
         retirments = 0;
     }
     return `${firstName} has ${retirments} years to retirment`;
     */
/*const retirments = 65 - age;
if (retirments > 0) {
    console.log(`${firstName} has ${retirments} years to retirment`);
    return retirments;
} else {
    console.log(`${firstName} has already retired`);
    return -1;
}
}
yearsUntilRetirment(1900, "Ali");
console.log(yearsUntilRetirment(1999, "Faeze"));
console.log(yearsUntilRetirment(1800, "Bob"));
*/



/*
function calcAverageScore(rival1, rival2, rival3) {
    const averageScore = (rival1 + rival2 + rival3) / 3;
    return averageScore;
}
let dolpinScore = calcAverageScore(85, 54, 41);
let koalasScore = calcAverageScore(23, 34, 27);
console.log(dolphinScore,koalasScore);
function checkWinner(avgDolphins,avgKoalas){
if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win`);
} else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas win`);
} else {
    console.log("There's no victory")
}}
*/
/*
const calcAverage = (rival1, rival2, rival3) => {
    return (rival1 + rival2 + rival3) / 3;
}
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);
console.log(scoreDolphins, scoreKoalas);

const checkWinner = function (avgDolphin, avgKoalas) {
    if (avgDolphin >= 2 * avgKoalas) {
        console.log(`Dolphins win ${avgDolphin} vs. ${avgKoalas}`);
        return 1;
    } else if (avgKoalas >= 2 * avgDolphin) {
        console.log(`Koalas win ${avgDolphin} vs. ${avgKoalas}`);
        return 1;
    } else {
        console.log(`No teams wins...`);
        return 0;
    }
};
checkWinner(scoreDolphins, scoreKoalas);
*/

//Introduction to Arrays
/*
//const friend1 = "Niloofar";
//const friend2 = "Setare";
//const friend3 = "Atoosa";
//Aray version 1
const friends = ["Niloofar", "Setare", "Atoosa"];
console.log(friends);
//Array version 2
const years = new Array(1999, 1995, 1800, 1588);
console.log(years);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);//3
console.log(friends[friends.length - 1]);// in the square bracket you can use expresion not the statement

friends[2] = "Nazanin";
console.log(friends);
//friends = ["Niloofar", "Setare", "Maryam"];//erorr?? line 206 and 208??? wheres the difference!!!

const firstName = "Faeze";
const faeze = [firstName, "Shabannejad", 2037 - 1999, "Job seeker", friends];
console.log(faeze);
console.log(faeze.length);

//Exercise
const calcAge = function (birthYear) {
    return 2037 - birthYear;
}

const y = [1999, 1991, 2008, 2000];
const age1 = calcAge(y[0]);
const age2 = calcAge(y[1]);
const age3 = calcAge(y[2]);
const age4 = calcAge(y[3]);
//const ages = [age1, age2, age3, age4];
//console.log(ages);
const ages2 = [calcAge(y[0]), calcAge(y[1]), calcAge(y[2]), calcAge(y[y.length - 1])];
console.log(ages2);
*/

// Basic Array Operations(methods)
/*
const friends = ["Me", "Setare", "Matin", "ans I"];
console.log(friends);

//Add

const newLength = friends.push("Atoosa");// add "Atoosa" to the end of the array//we made a const to store the value then we call it
console.log(friends);
console.log(newLength);//return value of the push function
console.log(friends.length);

friends.unshift("Jhonaton");//at the item to the beigining of the array
console.log(friends);

//Remove

friends.shift();//first
console.log(friends);

const poped = friends.pop();//last
console.log(friends);
console.log(poped);

console.log(friends.indexOf("Me"));
console.log(friends.indexOf("Bob"));

friends.push(23);
console.log(friends.includes("Atoosa"));
console.log(friends.includes("Setare"));
console.log(friends.includes(23));//number
console.log(friends.includes("23"));//string

if (friends.includes("Setare")) {
    console.log(`You have a friend called Setare`);
}
*/

//challange

/*
let tip;
function calcTip(cost) {
    switch (true) {
        case (cost >= 50 && cost <= 300):
            tip = 0.15 * cost;
            break;
        default:
            tip = 0.20 * cost;
    }
    return tip;
}
console.log(calcTip(100));

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[bills.length - 1])];
const totals = [tips[0] + bills[0], tips[1] + bills[1], tips[2] + bills[2]];
console.log(bills);
console.log(tips);
console.log(totals);
*/

//Introduction to Objects

/*
//const faezeArray = [
//    'Faeze',
//   'Shabannejad',
//    2037 - 1999,
//  'job seeker',
//  ['Niloofar', 'setae', 'Atoosa']
//];
//object literal syntax

const faeze = {
    firstName: "Faeze",
    lastName: "Shabannejad",
    birthYear: 1999,
    job: "job seeker",
    friends: ['Niloofar', 'setae', 'Atoosa'],
    hasDriverLicence: false,

    // calcAge: function () {
    //     console.log(this);
    //     return 2037 - this.birthYear;
    // }//this refers to faeze
    //function calcAge(birthYear){
    //return 2037-birthYear;
    //}this code doesn't work, pay attention to the structure above

    calcAge: function () {
        this.age = 2037 - this.birthYear;
        return this.age;
    },
    getimery: function () {
        return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and she has ${this.hasDriverLicence ? "a" : "no"
            }  driver's licence`
    }
};

console.log(faeze);

console.log(faeze.lastName);//accessing the property of an object
console.log(faeze["lastName"]);

const nameKey = "Name";
console.log(faeze['first' + nameKey]);
console.log(faeze['last' + nameKey]);

const interestedIn = prompt("What do you wnat to know about faeze?");

if (faeze[interestedIn]) {
    console.log(faeze[interestedIn]);
} else {
    console.log("Sorry! we don't access to this info...")
}

faeze.location = "Tehran";
faeze["telegram"] = "@fa8ze";
console.log(faeze);


//Challenge
//"Faeze has 3 friends, and his best friend is called Niloofar"
// console.log(`${faeze.firstName} has ${(faeze["friends"]).length} friends, and his best friend is called ${(faeze["friends"])[0]} `)
//console.log(`${faeze.firstName} has ${(faeze.friends).length} friends, and his best friend is called ${(faeze.friends)[0]} `)

//console.log(faeze.calcAge(1999));
//console.log(faeze["calcAge"](1999));
//console.log(faeze.calcAge(faeze.birthYear));
//console.log(faeze.calcAge(1800));
//console.log(faeze.birthYear);

//console.log(faeze.calcAge());

console.log(faeze.calcAge());

console.log(faeze.age);
console.log(faeze.age);

// `Faeze is a 38-year old jobseeker, and she has a driver's licence`

console.log(faeze.getimery());

faeze.status = "happy";
console.log(faeze);
*/

/*
//challange
const mark = {
    fullName: "Mark Miller",
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
};
const john = {
    fullName: "John Smith",
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;

    }
};
console.log(mark.calcBMI(), john.calcBMI());

function conclude() {
    if (mark.calcBMI() > john.calcBMI()) {
        return (`${mark.fullName}'s BMI (${mark.calcBMI()}) is higher than ${john.fullName}'s (${john.calcBMI()})!`);
    } else if (john.calcBMI() > mark.calcBMI()) {
        return (`${john.fullName}'s BMI (${john.calcBMI()}) is higher than ${mark.fullName}'s (${mark.calcBMI()})!`)
    } else {
        return (`Both are the same...`)
    }
};

conclude();
console.log(conclude());

*/

// challenge
/*
const mark = {
    fullName: "Mark Miller",
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        this.bmi = this.mass / (this.height ** 2);
        return this.bmi;
    }
}
const john = {
    fullName: "John Smith",
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
}
mark.calcBMI();
john.calcBMI();

console.log(mark.bmi, john.bmi);

function conclusion(bmiMark, bmiJohn) {
    if (bmiMark > bmiJohn) {
        return `${mark.fullName}'s BMI (${bmiMark}) is higher than ${john.fullName}'s BMI (${bmiJohn})`;
    } else if (bmiJohn > bmiMark) {
        return `${john.fullName}'s BMI (${bmiJohn}) is higher than ${mark.fullName}'s BMI (${bmiMark})`;
    } else {
        return `${john.fullName}'s BMI (${bmiJohn})is same as ${mark.fullName}'s BMI (${bmiMark})`
    };
}

const finalReport = conclusion(mark.bmi, john.bmi);
console.log(finalReport);
*/

// Iteration: The for Loop
/*
// console.log(`Lifting weights repetition 1`);
// console.log(`Lifting weights repetition 2`);
// console.log(`Lifting weights repetition 3`);
// console.log(`Lifting weights repetition 4`);
// console.log(`Lifting weights repetition 5`);
// console.log(`Lifting weights repetition 6`);
// console.log(`Lifting weights repetition 7`);
// console.log(`Lifting weights repetition 8`);
// console.log(`Lifting weights repetition 9`);
// console.log(`Lifting weights repetition 10`);


// for (let rep = 1; rep < 11; rep += 1) {
//     console.log(`Lifting weights repetition ${rep}`);
// }

// const faezeArray = [
//     "today",
//     "I am",
//     "tired",
//     true,
//     ["faeze", "me", "I"],
//     (2037 - 1999)
// ];
// const types = [];

// for (let i = 0; i < faezeArray.length; i++) {
//     console.log(faezeArray[i], typeof faezeArray[i]);

//     //filling types array
//     //types[i] = typeof faezeArray[i];
//     types.push(typeof faezeArray[i]);
// }

// console.log(types);

// const years = [1991, 2007, 1969, 2020];
// const ages = [];

// for (let i = 0; i < years.length; i++) {
//     ages.push(2037 - years[i]);
// }
// console.log(ages);

//continue and break

// const jonas = [
//     "Jonas",
//     "Schfigmtwa",
//     "teacher",
//     2037 - 1990,
//     ["Mike", "Dan", "Lorem"],
//     true
// ]

// console.log("-----ONLY STRINGS------");
// for (let i = 0; i < jonas.length; i++) {
//      if (typeof jonas[i] !== "string") continue;
//     console.log(jonas[i], typeof jonas[i]);
// }

// console.log("-----BREAK WITH NUMBER----")
// for (let i = 0; i < jonas.length; i++) {
//     if (typeof jonas[i] === "number") break;
//     console.log(jonas[i], typeof jonas[i]);
// }

//Looping Backwards and Loops in Loops

// const jonas = [
//     "Jonas",
//     "Schfigmtwa",
//     "teacher",
//     2037 - 1990,
//     ["Mike", "Dan", "Lorem"],
//     true,
//     false
// ]

// for (let i = jonas.length - 1; i >= 0; i--) {
//     console.log(jonas[i]);
// }

//loop in loop

// for (let exercise = 1; exercise < 4; exercise++) {
//     console.log(`-----Starting exercise ${exercise}`);

//     for (let rep = 1; rep < 6; rep++) {
//         console.log(`exercise ${exercise} : Lifting weight repetition ${rep}`);
//     }
// }
*/

// While Loop
/*
// for (let rep = 1; rep < 11; rep++) {
//     console.log(`Lifting ${rep}`);
// }

// let repetition = 1;
// while (repetition < 11) {
    //console.log(`lifting ${repetition}`);
//     repetition++;
// }

// let dice = Math.trunc(Math.random() * 6) + 1;

// while (dice !== 6) {
//     console.log(`You rolled a ${dice}`);
//     dice = Math.trunc(Math.random() * 6) + 1;
//     if (dice === 6) {
//         console.log(`Loop is about to end...`);
//     }
// }
*/

// Challange Chapter 2 (Final)
const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

//My Answer

//const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// console.log(bills);
// const tips = [];
// for (let i = 0; i < bills.length; i++) {
//     tips.push(calcTip(bills[i]));
// }
// console.log(tips);
// const totals = [];
// for (let i = 0; i < tips.length && i < bills.length; i++) {
//     totals.push(tips[i] + bills[i]);
// }
// console.log(totals);

//Teacher Answer
/*
const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
    const tip = calcTip(bills[i]);
    tips.push(tip);
    totals.push(tip + bills[i]);
}

console.log(bills, tips, totals);

const calcAverage = function (arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    console.log(sum);
    return sum / arr.length;
}
console.log(calcAverage([2, 3, 7]));
console.log(calcAverage(totals));
console.log(calcAverage(tips));
*/
