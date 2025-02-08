const once = (fn) => {
    let call = false;
    return function (...params) {
        if (call) return;
        call = true;
        return fn.apply(this, ...params);
    };
};

function test() {
    console.log(1);
}

const onceFn = once(test);
onceFn();
onceFn();
