/**
 * @param {string} s
 * @return {character}
 */
var firstUniqChar = function(s) {
    const arr = s.split('');
    const map = {} //保存单个字符出现的次数
    for (let i = 0; i < arr.length; i++) {
        const ele = arr[i];
        map[ele] = typeof map[ele] === 'undefined'? 1 : (map[ele]+1)
    }
    for (let j = 0; j < arr.length; j++) {
        const jEle = arr[j];
        if (map[jEle] === 1) {
            return jEle
        }
    }
    return " ";
};

// 时间复杂度 O(n)