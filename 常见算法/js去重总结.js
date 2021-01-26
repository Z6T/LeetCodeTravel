// function unique(arr) {
//     return Array.from(new Set(arr))
// }

function unique(arr) {
    const map = {}
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        map[element] = undefined;
    }
    return Object.keys(map);
}
function unique(arr) {
    const res = []
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        !res.includes(element)?res.push(element):''
    }
    return res
}

const res = unique([1,22,33,33,4,4,7,8,7,9,0,9])
console.log('res', res)