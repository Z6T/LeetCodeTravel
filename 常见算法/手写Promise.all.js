function promiseAll(promises) {
    return new Promise(function (resolve, reject) {
        if (!Array.isArray(promises)) {
            return reject('promises must be an array')
        }
        const len = promises.length
        let finishedNum = 0
        const resValues = new Array(len)
        for (let i = 0; i < len; i++) {
            const p = promises[i];
            Promise.resolve(p).then(res => {
                finishedNum++;
                resValues[i] = res
                if (finishedNum === len) {
                    resolve(resValues)
                }
            }, err => {
                    reject(err)
            })
        }
    })
}


function PromiseRace(promises) {
  return new Promise(function (resolve, reject) {

    for (let i = 0; i < promises.length; i++) {
      const p = promises[i];
      Promise.resolve(p).then(res => {
        resolve(res)
      }, err => {
          reject(err)
      })
    }
  })
}




// test
let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(111);
    }, 2000);
  });
  let p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(222);
    }, 10000);
  });
  let p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(333);
    }, 3000);
  });
  
  PromiseRace([p1, p2, p3]).then((res) => {
    console.log(res);
  });