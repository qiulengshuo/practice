const permute = (list) => {
    const map = {};
    const res = [];
    const backTrack = (path) => {
        if (path.length === list.length) {
            res.push(path.slice());
            return;
        }
        for (let i = 0; i < list.length; i++) {
            if (map[list[i]]) continue;
            map[list[i]] = true;
            path.push(list[i]);
            backTrack(path);
            path.pop();
            map[list[i]] = false;
        }
    };
    backTrack([]);
    return res;
};

console.log(permute([1, 2, 3]));
