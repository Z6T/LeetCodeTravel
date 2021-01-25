

// 入：12345，输出：12,234；输入：2345.6789，输出：2,345.6789

function fn(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,').replace(/\..+\B/g, (str) => {
        return str.replace(/,/g,'')
    })
}

console.log(fn(12343335))
console.log(fn(1234333.55555))



// ace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")