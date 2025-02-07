// 不定长
const add = (...params) => {
    const _add = (..._params) => {
        params = params.concat(_params);
        return _add;
    };
    _add.valueOf = () => {
        return params.reduce((prev, cur) => {
            return prev + cur;
        }, 0);
    };
    return _add;
};
console.log(add(1, 2)(3, 4).valueOf());
console.log(add(1, 2)(3, 4)(5).valueOf());

// 定长
const curry = (fn) => {
    let paramsList = [];
    const _fn = (...params) => {
        paramsList = paramsList.concat(params);
        if (fn.length <= paramsList.length) {
            return fn(...paramsList);
        } else {
            return _fn;
        }
    };
    return _fn;
};
const addNum = (a, b) => {
    return a + b;
};
console.log(curry(addNum)(1)(2));
console.log(curry(addNum)(1, 2));
console.log(curry(addNum)(1));
