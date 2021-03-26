const curry = (fn) => {
    let args = []
    return function temp(...newArgs) {
        if (newArgs.length) {
            args = [
                ...args,
                ...newArgs
            ]
            return temp;
        } else {
            return fn.apply(this,args)
        }
        
    }
}

const add = (a, b, c) => a + b - c;
const curryAdd = curry(add)
console.log('a',curryAdd(1,2,3)())
console.log(curryAdd(1,2)(3)())