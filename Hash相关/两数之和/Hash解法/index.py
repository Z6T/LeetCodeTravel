class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        map = {}
        for i in range(len(nums)):
            num = nums[i]
            diff = target - num
            if diff in map.keys():
                return [i, map[diff]]
            else:
                map[num] = i