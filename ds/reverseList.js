class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}

const list = new Node(1, new Node(2, new Node(3, new Node(4, new Node(5)))));

function reverse(head) {
    let prev = null;
    let cur = head;
    while (cur) {
        const temp = prev;
        prev = cur;
        cur = cur.next;
        prev.next = temp;
    }
    return prev;
}

console.log(JSON.stringify(reverse(list)));
