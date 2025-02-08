function instanceOf(obj, constructor) {
    if (typeof constructor !== 'function') {
        throw 'constructor must be a function';
    }
    if (typeof obj !== 'object' || (typeof obj === 'object' && obj === null)) {
        throw 'obj must be a object';
    }
    let proto = Object.getPrototypeOf(obj);
    while (proto !== null) {
        if (proto === constructor.prototype) {
            return true;
        }
        proto = Object.getPrototypeOf(proto);
    }
    return false;
}

console.log(instanceOf([], Array));
