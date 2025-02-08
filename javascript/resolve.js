const a = (cb) => {
    setTimeout(() => {
        cb(Math.random());
    }, 1000);
};

const b = () => {
    return new Promise((resolve) => {
        a(resolve);
    });
};

b().then((res) => {
    console.log(res);
});
