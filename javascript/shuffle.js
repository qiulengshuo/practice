const arr = [1, 2, 3, 4, 5, 6];

const shuffle = (arr) => {
    const len = arr.length;
    for (let i = len - 1; i >= 0; i--) {
        const j = Math.floor(Math.random() * i);
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
};

shuffle(arr);

console.log(arr);
