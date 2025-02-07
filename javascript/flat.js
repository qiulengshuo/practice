const arr = [1, [2, [3, [4, 5]]], [6, 7], [8, [9, [10, 11]]], 12];

const flat = (arr) => {
    return arr.reduce((prev, cur) => {
        if (Array.isArray(cur)) {
            return prev.concat(flat(cur));
        } else {
            return prev.concat(cur);
        }
    }, []);
};

console.log(flat(arr));
