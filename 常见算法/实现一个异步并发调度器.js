//支持并发的调度器， 最多允许2两任务进行处理



class Scheduler{
    constructor(limit) {
        this.limit = limit;
        this.queue = []
        this.number = 0;
    }
    
    addTask(timeout, str) {
        this.queue.push([timeout,str])
    }

    showDate() {
        let n = 0
        // setInterval(() => {
        //     console.log('---------------当前第', ++n,'秒-----------------')
        // }, 1000)
        
    }

    start() {
        if (this.number < this.limit && this.queue.length) {
            this.number++;
            const [timeout, str] = this.queue.shift()
            setTimeout(() => {
                console.log(str);
                this.number--;
                this.start()
            }, timeout *1000)
            this.start()
            
        }
        
    }
}


const scheduler = new Scheduler(4)
scheduler.addTask(1, '1');   // 1s后输出’1'
scheduler.addTask(2, '2');  // 2s后输出’2'
scheduler.addTask(1, '3');  // 2s后输出’3'
scheduler.addTask(1, '4');  // 3s后输出’4'
scheduler.showDate()
scheduler.start()