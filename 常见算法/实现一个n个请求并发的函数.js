function sendRequest(urls, max, callback) { 
    const total = urls.length
    let finished =0

    const handler = function () {
        url = urls.shift()
        if (total) {
            fetch(url).then(item => {
                finished++
                handler()
            })
        }
        if (finished >= total) {
            callback()
        }
    }



    for (let i = 0; i < max; i++) {
        handler() // 先开辟3条线 ,然后在每条线的回调中继续进行fetch.这样的话.并发数就永远永远不会超过三个了.回调牛逼啊
    }
}