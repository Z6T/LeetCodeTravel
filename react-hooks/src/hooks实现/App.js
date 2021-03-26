let isMount = true;
let workInProgress = null;  // 指的是当前正在处理哪个hook

const fiber = {
    stateNode: App,
    memoizedState:null  // 保存的是一条链表,链表是函数组件每一个hook对应的数据
}

function schedule() {
    workInProgress = fiber.memoizedState;
    const app = fiber.stateNode();
    ifMount = false;
    return app
}

function useState(initialState) {
    let hook;
    if (isMount) {
        hook = {
            memoizedState: initialState,          //对应hook初始化的状态
            next: null
        }
        if (!fiber.memoizedState) {
            fiber.memoizedState = hook;
            workInProgress = hook;
        } else {
            workInProgress.next = hook;
        }
        workInProgress = hook;
    } else {
        
    }
}

function App() {
    const [num, updateNum] = useState(0)
    return {
        onClick() {
                updateNum(num=>num+1)
        }
    }
}

window.app = schedule()