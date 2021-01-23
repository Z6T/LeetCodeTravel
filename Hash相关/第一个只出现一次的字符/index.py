class Solution:
    def firstUniqChar(self, s: str) -> str:
        map = {}
        arr = list(s)
        for i in range(len(arr)):
            ele = arr[i]
            if (ele in map.keys()):
                map[ele] = map[ele] + 1
            else:
                map[ele] = 1
        for j in range(len(arr)):
            jele = arr[j]
            if (map[jele] == 1):
                return jele
        return ' '