"use stric";
// let longestSubString = function (str) {
//   const words = str.toLowerCase().split("");
//   console.log(words);
//   const iterateTimeWord = new Map();
//   const result = [];
//   for (const [wordind, word] of words.entries()) {
//     console.log(wordind, word);
//     if (!iterateTimeWord.get(word)) {
//       iterateTimeWord.set(word, wordind);
//     } else {
//     }
//   }
//   console.log(iterateTimeWord);
// };
// longestSubString("abcabcbb");
// detecSubString("aBciiiDef");

////Q1:easy
/*
const findMaxAdjacentDifference = function (nums) {
  if (nums.length === 0) {
    console.error("Input array is empty.");
    return null;
  }
  const result = [];
  for (const [index, num] of nums.entries()) {
    let subtract =
      index + 1 < nums.length
        ? nums[index] - nums[index + 1]
        : nums[index] - nums[0];
    if (index + 1 < nums.length) {
      result.push(Math.abs(subtract));
    } else {
      subtract = nums[nums.length - 1] - nums[0];
      result.push(Math.abs(subtract));
    }
  }
  const maxResult = Math.max(...result);
  console.log(maxResult);
  return maxResult;
};
findMaxAdjacentDifference([1, 2, 4]);
findMaxAdjacentDifference([2, 1, 0]);
findMaxAdjacentDifference([-5, -10, -5]);
// maxAdjacentDistance([-10, -5]);
// maxAdjacentDistance([-5, -5]);
// maxAdjacentDistance([-5, -10]);
*/
////Q2:easy
/*
let isPalindrome = function (num) {
  num = String(num);
  const n = num.length;
  for (let i = 0; i < Math.floor(n / 2); i++) {
    if (num[i] === num[n - (i + 1)]) {
    } else {
      return false;
    }
  }
  console.log(true);
  return true;
};
isPalindrome(1);
// isPalindrome(32);
// isPalindrome(345);
// isPalindrome(1001);
// isPalindrome(1021);
*/
////Q3:easy
/*
function romanToInt(r) {
  const roman = new Map([
    ["I", 1],
    ["V", 5],
    ["X", 10],
    ["L", 50],
    ["C", 100],
    ["D", 500],
    ["M", 1000],
  ]);
  r = r.split("");
  let result = 0;
  for (let i = 0; i < r.length; i++) {
    const currentValue = roman.get(r[i]);
    const nextValue = roman.get(r[i + 1]);
    if (currentValue < nextValue) {
      result -= currentValue;
    } else {
      result += currentValue;
    }
  }
  console.log(result);
  return result;
}
// romanToInt("MC");
romanToInt("MCMXCIV");
// romanToInt("XV");
// romanToInt("III");
// romanToInt("LVIII");
// romanToInt("DM");
*/
////Q4:easy-remove duplicates
/*
function removeDuplicates(nums) {
  let i = 0;
  for (let j = 0; j < nums.length; j++) {
    if (nums[i] !== nums[j]) {
      i++;
      nums[i] = nums[j];
    }
  }
  console.log(nums);
  return;
}
removeDuplicates(["1", "1", "3"]);
removeDuplicates([1, 1, 2]);
*/
///Q:med , add two numbers
/*
let addTwoNumbers = function (l1, l2) {
  // first:equall length of arrays
  n = Math.max(l1.length, l2.length);
  let diff1 = n - l1.length;
  let diff2 = n - l2.length;
  if (n > l1.length) {
    for (let i = 0; i < diff1; i++) {
      l1.push(0);
    }
  }
  if (n > l2.length) {
    for (let i = 0; i < diff2; i++) {
      l2.push(0);
    }
  }
  // second: add each number of array to each other
  let l3 = [];
  let carry = 0;
  l1.forEach((digit, index) => {
    let sum = digit + l2[index] + carry;
    // l3[index]
    if (sum >= 10) {
      l3[index] = sum - 10;
      carry = 1;
      if (l3.length === n) {
        l3.push(1);
      }
    } else {
      l3[index] = sum;
      carry = 0;
    }
  });
  // console.log(arr1, arr2);
  // console.log(l3);
  // console.log(l3.reverse());
  console.log(l3.reverse().join(""));
};

//432,34500 = 34932
// arr1 = [2, 3, 4];
// arr2 = [0, 0, 5, 4, 3];
//5
//16
// arr1 = [5];
// arr2 = [6, 1];
// arr1 = [8];
// arr2 = [2];

addTwoNumbers(arr1, arr2);
*/
///////
// Q:example frequency counters
function same(arr1, arr2) {
  // check if we have the same size frequnt of element
  if (arr1.length !== arr2.length) {
    return false;
  }

  // check elements one by one
  for (const el1 of arr1) {
    for (let i = 0; i < arr2.length; i++) {
      let found = false;
      if (el1 ** 2 === arr2[i]) {
        arr2[i] = null; //mark this element as used
        found = true;
        break; // move to next el1
      }
    }
    if (found === false) {
      return false;
    }
  }
  return true;
}
