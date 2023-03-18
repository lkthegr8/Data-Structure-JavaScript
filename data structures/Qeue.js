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
class Queue {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  shift() {
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
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
}

var list = new Queue();

console.log(list.push(5));
console.log(list.push(7));
console.log(list.push(9));
console.log(list.shift());
console.log(list.shift());
console.log(list.shift());
console.log(list.length);
