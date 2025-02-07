function sleep(duration) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, duration);
    });
}

(async () => {
    await sleep(3000);
    console.log('sleep time over');
})();
