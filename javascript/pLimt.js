function requestLimit(concurrency) {
    if (!validateConcurrency(concurrency)) {
        throw 'concurrency must be a number';
    }
    let requestPool = [];
    let activeCount = 0;

    const next = () => {
        activeCount--;
        if (requestPool.length > 0) {
            requestPool.shift()();
        }
    };

    const run = async (func, resolve, reject) => {
        activeCount++;
        console.log('run');
        try {
            const result = await func();
            console.log('result');
            resolve(result);
        } catch (error) {
            console.log('catch');
            reject(error);
        }
        next();
    };

    const enqueue = (func, resolve, reject) => {
        requestPool.push(run.bind(null, func, resolve, reject));
        if (activeCount < concurrency && requestPool.length > 0) {
            requestPool.shift()();
        }
    };

    const request = (func) => {
        return new Promise((resolve, reject) => {
            enqueue(func, resolve, reject);
        });
    };

    return request;
}

const validateConcurrency = (concurrency) => {
    return Number.isInteger(concurrency);
};

const requestImg = (url) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(url);
        }, 1000);
    });
};

const request = requestLimit(5);

const p1 = request(() => requestImg('11111'));
const p2 = request(() => requestImg('22222'));
const p3 = request(() => requestImg('333333'));

const all = await Promise.all([p1, p2, p3]);
console.log(all);
