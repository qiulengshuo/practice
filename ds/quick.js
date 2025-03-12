const fn = (arr) => {
    const __fn = (arr) => {
        if (arr.length <= 1) return arr;
        const p = arr[0];
        const leftList = [];
        const rightList = [];
        for (let i = 1; i < arr.length; i++) {
            if (arr[i] < p) {
                leftList.push(arr[i]);
            } else {
                rightList.push(arr[i]);
            }
        }
        return [...__fn(leftList), p, ...__fn(rightList)];
    };
    const res = __fn(arr);
    res.forEach((item, key) => {
        arr[key] = item;
    });
    return arr;
};
console.log(fn([1, 4, 2, 5, 1, 5, 2, 5, 8, 9, 2]));
