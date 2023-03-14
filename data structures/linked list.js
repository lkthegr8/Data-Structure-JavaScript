class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
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

  pop() {
    if (!this.head) {
      return undefined;
    }
    let current = this.head;
    let newTail = current;

    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length == 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
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

  unShift(val) {
    let newNode = new Node(val);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    if (this.length == 1) {
      this.tail = newNode;
    }
    return newNode;
  }

  get(index) {
    if (index >= this.length) {
      return null;
    }
    let traversalIndex = 0;
    let traversalNode = this.head;
    while (traversalIndex < index) {
      traversalNode = traversalNode.next;
      traversalIndex++;
    }

    return traversalNode;
  }

  set(index, val) {
    let foundNode = this.get(index);
    if (foundNode) {
      foundNode.val = val;
      return true;
    }
    return false;
  }

  insert(index, value) {
    if (index < 0 || index > this.length) {
      return false;
    }
    if (index == this.length) {
      return !!this.push(value);
    }
    if (index == 0) {
      return !!this.unShift(value);
    }

    let newNode = new Node(value);
    let previous = this.get(index - 1);
    let temp = previous.next;
    previous.next = newNode;
    newNode.next = temp;
    this.length++;
    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length) {
      return false;
    }
    if (index == this.length - 1) {
      return !!this.pop();
    }
    if (index == 0) {
      return !!this.shift();
    }

    let previous = this.get(index - 1);
    previous.next = previous.next.next;
    this.length--;
    return true;
  }

  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let previous = null;
    let next;
    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = previous;
      previous = node;
      node = next;
    }
    return this;
  }
}

// var first = new Node("hi");
// first.next = new Node("how");
// first.next.next = new Node("are");
// first.next.next.next = new Node("you");

var list = new SinglyLinkedList();
console.log(list.push(5));
console.log(list.push(6));
console.log(list.push(7));
// console.log(list.reverse());
// console.log(list);
console.log(list.pop());
console.log(list);
console.log(list.push(10));
console.log(list.push(8));
console.log(list.shift());
console.log(list.unShift(100));
console.log(list.get(100));
console.log(list.get(1));
console.log(list.set(1, 88));
console.log(list);
console.log(list.set(7, 22));
console.log(list.insert(1, "inserted"));
console.log(list.remove(1));
console.log(list.reverse());
console.log(list);
