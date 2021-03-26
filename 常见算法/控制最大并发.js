



function createRequestPool(pool) {
    let count = 0; let urlPools = [];
    return function request(url) {
        if (!url && !urlPools.length) return;
        urlPools.push(url);
        if (count > pool) return;
        return new Promise((resolve, reject) => {
            count++
            setTimeout(() => {
                count--;
                if (count <= pool) {
                    request()
                }
                resolve(urlPools.shift())
            }, 1000)
        })
    }
}

const request = createRequestPool(10)
for (let i = 0; i < 10000; i++) {
    request('/count').then(console.log)
}