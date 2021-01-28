function negativeArray(arr) {
    return new Proxy(arr, {
        get(target,key) {
            console.log('target', target)
            console.log('key', key)
            return Reflect.get(target,Math.abs(key))
        }
    })
}

let proxt = negativeArray([1,2,3,4,5])
console.log('proxt', proxt)
console.log('proxt[-1]', proxt[-1])