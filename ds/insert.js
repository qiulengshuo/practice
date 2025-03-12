const fn = (arr) => {
    for (let i = 1; i < arr.length; i++) {
        let j = i;
        const item = arr[i];
        while (j >= 1) {
            if (arr[j - 1] > item) {
                arr[j] = arr[j - 1];
            } else {
                break;
            }
            j--;
        }
        arr[j] = item;
    }
    console.log(arr);
};

fn([1, 3, 5, 2, 1, 3, 1, 6]);
