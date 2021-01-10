// nums = [2,7,11,15], target = 9

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
 for (let i = 0; i < nums.length; i++) {
  const iNum = nums[i];
  for (let j = i + 1; j < nums.length; j++) {
   // j永远是从外层循环的下一个下标开始
   const jNum = nums[j];
   if (iNum + jNum === target) {
    return [i, j];
   }
  }
 }
};

// 时间复杂度  O(n2)

// 2  7  11  15

// 一层
//     外层  2
//     内层  7   11  15
// 二层
//     外层  7
//     内层  11
