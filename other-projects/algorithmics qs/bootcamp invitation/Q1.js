"use stric";
// let longestSubString = function (str) {
//   str = str.toLowerCase();
//   console.log(str);
// };
// // detecSubString("abcabcbb");
// detecSubString("aBciiiDef");

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
