function _new(Dog,...args) {
    const obj = Object.create(Dog.prototype);
    const ret = [].shift.apply(obj,args)
    return  ret instanceof Object ?ret:obj;
}