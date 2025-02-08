// const set = (obj, keyPaths, value) => {
//     let o = obj;
//     for (let i = 0; i < keyPaths.length; i++) {
//         if (i === keyPaths.length - 1) {
//             o[keyPaths[i]] = value;
//             return;
//         }
//         if (typeof o[keyPaths[i]] !== 'object' || (typeof o[keyPaths[i]] === 'object' && o[keyPaths[i]] === null)) {
//             o[keyPaths[i]] = {};
//         }
//         o = o[keyPaths[i]];
//     }
// };

const set = (obj, keyPaths, value) => {
    const key = keyPaths.shift();
    if (keyPaths.length === 0) {
        obj[key] = value;
        return;
    }
    if (typeof obj[key] !== 'object' || (typeof obj[key] === 'object' && obj[key] === null)) {
        obj[key] = {};
    }
    set(obj[key], keyPaths, value);
};

const obj = {};

set(obj, ['a', 'b', 'c'], 100);
set(obj, ['a', 'b', 'c', 'd'], 200);

console.log(JSON.stringify(obj));
