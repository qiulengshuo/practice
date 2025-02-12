function step(n) {
    if (n === 1) return 1;
    if (n === 2) return 2;
    return step(n - 1) + step(n - 2);
}

function step2(n) {
    if (n === 1) return 1;
    if (n === 2) return 2;
    let a = 1;
    let b = 2;
    for (let i = 3; i <= n; i++) {
        const temp = b;
        b = a + b;
        a = temp;
    }
    return b;
}

console.log(step(10), step2(10));
