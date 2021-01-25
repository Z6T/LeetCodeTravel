var arr2 = [1, 2, [3, 4, [5, [6, 7]]]]
// $1

// function flat(arr) {
//     return arr.reduce((prev, cur) => {
//         return prev.concat((Array.isArray(cur) ? flat(cur) : cur))
//     }, [])
// }

// function flat(arr) {
//     const str =  arr.toString().replace(/[\[\]]/g,'')
//     return str.split(',').filter(item=>item)
// }


// 加层级的递归deepth

function flatern(arr, deepth) {
    const res = [], count = 1; // 1后边一定要有括号
        (function flat(arr, count) {
            arr.forEach(item => {
                if (Array.isArray(item) && count < deepth) {
                    count++
                    return flat(item, count)
                } else {
                    res.push(item)
                }
            })
        })(arr, count)
    return res

}


console.log('flat(arr) 1--->', flatern(arr2, 1))
console.log('flat(arr) 2--->', flatern(arr2, 2))
console.log('flat(arr) 3--->', flatern(arr2, 3))