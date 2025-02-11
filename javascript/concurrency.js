const imgList = ['url1', 'url2', 'url3', 'url4', 'url5', 'url6'];

const requestImg = (url) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(url);
        }, 1000);
    });
};

const uploadImg = (urls) => {
    const resList = [];
    const concurrency = 5;
    let requestIndex = -1;
    let doneCount = 0;
    let activeCount = 0;
    return new Promise(async (resResolve, reject) => {
        const upload = (url, requestIndex) => {
            requestImg(url)
                .then((res) => {
                    console.log('url 请求成功', url);
                    resList[requestIndex] = res;
                })
                .finally(() => {
                    doneCount++;
                    activeCount--;
                    next();
                });
        };
        const next = async () => {
            if (requestIndex < urls.length - 1 && activeCount < concurrency) {
                requestIndex++;
                activeCount++;
                console.log('upload ', urls[requestIndex]);
                upload(urls[requestIndex], requestIndex);
            } else if (doneCount === urls.length) {
                resResolve(resList);
            }
        };
        while (activeCount < concurrency) {
            next();
        }
    });
};

(async () => {
    const res = await uploadImg(imgList);
    console.log(res);
})();
