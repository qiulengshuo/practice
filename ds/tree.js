const pre = (node) => {
    if (!node) return [];
    const res = [];
    const dfs = (node) => {
        res.push(node.value);
        node.left && dfs(node.left);
        node.right && dfs(node.right);
    };
    dfs(node);
    return res;
};

console.log(
    pre({
        value: 1,
        left: {
            value: 2,
        },
        right: {
            value: 3,
        },
    }),
);
