const list = [
    {
        id: 'a1',
        label: 'a1',
        pid: 'a3',
    },
    {
        id: 'a2',
        label: 'a2',
        pid: 'a1',
    },
    {
        id: 'a3',
        label: 'a3',
        pid: 'a6',
    },
    {
        id: 'a4',
        label: 'a4',
        pid: 'root',
    },
    {
        id: 'a5',
        label: 'a5',
        pid: 'a6',
    },
    {
        id: 'a6',
        label: 'a6',
        pid: 'a4',
    },
];

function buildTree(root, list) {
    const children = list.filter((item) => item.pid === root.id);
    if (children.length > 0) {
        root.children = children.map((item) => buildTree(item, list));
    }
    return root;
}

const tree = buildTree({ id: 'root', label: 'root', pid: null }, list);

console.log(JSON.stringify(tree));

function buildArray(tree, arr = []) {
    arr.push(tree);
    const node = tree;
    if (node.children && node.children.length > 0) {
        for (let i = 0; i < node.children.length; i++) {
            buildArray(node.children[i], arr);
        }
    }
    return arr;
}

console.log(buildArray(tree));
