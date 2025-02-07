const deepClone = (obj) => {
    if (typeof obj !== 'object' || obj === null) {
        return obj;
    }
    let res;
    if (Array.isArray(obj)) {
        res = [];
        for (let i = 0; i < obj.length; i++) {
            res.push(deepClone(obj[i]));
        }
    } else if (obj instanceof Set) {
        res = new Set();
        for (const item of obj) {
            res.add(deepClone(item));
        }
    } else if (obj instanceof Map) {
        res = new Map();
        for (const item of obj) {
            res.set(deepClone(item[0]), deepClone(item[1]));
        }
    } else {
        res = {};
        Reflect.ownKeys(obj).forEach((item) => {
            res[item] = deepClone(obj[item]);
        });
    }
    return res;
};
const obj = {
    a: 1,
    b: 2,
    [Symbol()]: '1',
    set: new Set([1, 2, 3]),
    map: new Map([['a', 1]]),
    c: [
        {
            d: {
                e: 2,
            },
        },
    ],
};
console.log(deepClone(obj));
console.log(JSON.parse(JSON.stringify(obj)));
