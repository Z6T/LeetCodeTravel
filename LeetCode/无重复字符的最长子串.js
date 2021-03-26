/**
 * 暴力解法
 */

function lengthOfLongestSubstring(s) {
    const childArr = [],res = []
    for (let i = 0; i < s.length; i++) {
        for (let j = i+1; j < s.length; j++) {
            childArr.push(s.slice(i,j))
        }
    }
    for (let m = 0; m < childArr.length; m++) {
        const str = childArr[m];
        for (let n = 0; n < str.length; n++) {
            const char = str[n];
            if (str.indexOf(char) == str.lastIndexOf(char)) {
                break;
            } else if (n === str.length - 1) {
                res.push(str)
            }
        }
    }
    console.log(res);
    return Math.max(res.map(item=>item.length))

}