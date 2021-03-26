/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number} 快速排序
 */
var findKthLargest = function (nums, k) {
    function sort(nums) {
        if(!nums.length) return nums
        let left = []
        let right = [];
        let point = nums.splice(Math.floor(nums.length / 2),1);
        for (let index = 0; index < nums.length; index++) {
            const num = nums[index];
            if (num < point) {
                right.push(num)
            } else {
                left.push(num)
            }
        }
        return sort(left).concat(point).concat(sort(right))
    }
    return sort(nums)[k-1]
};
/**
 * 维护最小堆
 */
var findKthLargest 