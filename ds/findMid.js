class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}

const list = new Node(1, new Node(2, new Node(3, new Node(4, new Node(5)))));

function findMid(head) {
    let slow = head;
    let fast = head;
    while (fast.next !== null && fast.next.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;
}

console.log(findMid(list));
