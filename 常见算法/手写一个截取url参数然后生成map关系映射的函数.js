//, 手写一个截取url参数然后生成map关系映射的函数
function fn(url) {
    const index = url.search(/\?/)
    const queryStr = url.substring(index + 1)
    const map = new Map()
    queryStr.split('&').forEach(item => {
        const mapArr = item.split('=')
        map.set(mapArr[0],mapArr[1])
    })
    return map
}

console.log(fn("www.google.com?name=xht&sex=fale"));
