// 树 isChecked name 升序 新树
const tree = {
  name: 'china',
  children: [
    {
      name: 'guangzhou',
      isChecked: true,
      children: [
        {
          name: 'abc',
        },
        {
          name: 'n',
          isChecked: true,
        },
      ],
    },
    {
      name: 'beijing',
      isChecked: true,
      children: [
        {
          name: 'b',
          isChecked: true,
        },
        {
          name: 'a',
          isChecked: false,
        },
      ],
    },
  ],
};

const sortTree = (tree) => {
  if (!tree.children || tree.children.length === 0) return Object.assign({}, tree);
  let children = tree.children.sort((a, b) => (a.name > b.name ? 1 : -1));
  const isCheckedList = [];
  const unCheckedList = [];
  for (let i = 0; i < children.length; i++) {
    if (children[i].isChecked) {
      isCheckedList.push(children[i]);
    } else {
      unCheckedList.push(children[i]);
    }
  }
  children = isCheckedList.concat(unCheckedList);
  for (let i = 0; i < children.length; i++) {
    children[i] = sortTree(children[i]);
  }
  return Object.assign({}, tree, {
    children,
  });
};

console.log(JSON.stringify(sortTree(tree)));
