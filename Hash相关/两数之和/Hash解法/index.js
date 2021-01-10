/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
 const map = {};
 for (let i = 0; i < nums.length; i++) {
  const num = nums[i];
  const diff = target - num;
  if (typeof map[diff] === "number") {
   return [i, map[diff]];
  } else {
   map[num] = i;
  }
 }
};
