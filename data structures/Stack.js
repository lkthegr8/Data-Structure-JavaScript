//  it is a LIFO data structure
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// stack requires a constant time of push and pop operation
// we cant use normal push and pop , beacuse we would have to traverse through whole linked list to find the second last element in the singly linked list
// therefore what we have done is, used shift and unshift operation insted of push and pop operation
class Stack {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  pop() {
    if (!this.head) {
      return undefined;
    }
    let currentHead = this.head;
    this.head = currentHead.next;
    this.length--;

    return currentHead;
  }

  push(val) {
    let newNode = new Node(val);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    if (this.length == 1) {
      this.tail = newNode;
    }
    return newNode;
  }
}

var list = new Stack();

console.log(list.push(5));
console.log(list.push(7));
console.log(list.push(9));
console.log(list.pop());
console.log(list.pop());
console.log(list.pop());
console.log(list.length);
