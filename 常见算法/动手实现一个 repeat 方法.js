// 调用这个 repeatFunc ("hellworld")，会alert4次 helloworld, 每次间隔3秒
/**
动手实现一个 repeat 方法
function repeat(func, times, wait) {
}
const repeatFunc = repeat(alert, 4, 3000);

*/


function repeat(alert,times,timeout){
    for (let i = 0; i < times; i++) {
        setTimeout(() => {
            console.log('alert :>> ', alert);
        }, timeout*i)
        
        
    }
}

const repeatFunc = repeat('alert', 4, 3000);

