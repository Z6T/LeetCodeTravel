



// Promise.all 异常/出错一般情况下，all里传promise数组，但是只要有一个出错，就会进入到catch里，不会捕获到正常数据的


function P(error = false) {
    return new Promise((res, rej) => {
        if (error) {
            rej('error')
        } else {
            res('right')
        }
    })
}
var a = P() //成功的Promise
var b = P(true) // 失败的promise

Promise.all(　　// promise数组，经过下面处理还是promise
    [a, b].map(item=>item.catch(item=>item))
)
    .then(res => {
        console.log(res, 'res')
    })
    .catch(error => {
        console.log(error, 'error')
    })