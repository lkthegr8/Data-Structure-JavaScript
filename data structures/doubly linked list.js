class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.previous = null;
  }
}

class doublyLinkedList {
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
      newNode.previous = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) {
      return undefined;
    }
    let poppedNode = this.tail;

    if (this.length == 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail.previous;
      this.tail.next = null;
      poppedNode.previous = null;
    }
    this.length--;
    return poppedNode;
  }

  shift() {
    if (!this.head) {
      return undefined;
    }
    let oldHead = this.head;
    if (this.length == 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = oldHead.next;
      this.head.previous = null;
      oldHead.next = null;
    }
    this.length--;

    return oldHead;
  }

  unShift(val) {
    let newNode = new Node(val);
    if (this.length == 0) {
      this.tail = newNode;
      this.head = newNode;
    }
    this.head.previous = newNode;
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return newNode;
  }

  get(index) {
    if (index >= this.length) {
      return null;
    }
    let traversalNode, traversalIndex;
    if (index <= this.length / 2) {
      traversalIndex = 0;
      traversalNode = this.head;
      while (traversalIndex < index) {
        traversalNode = traversalNode.next;
        traversalIndex++;
      }
    } else {
      traversalIndex = this.length - 1;
      traversalNode = this.tail;
      while (traversalIndex > index) {
        traversalNode = traversalNode.previous;
        traversalIndex--;
      }
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
    let nextNode = previous.next;
    // previous node connection
    previous.next = newNode;
    newNode.previous = previous;
    // next node connection
    newNode.next = nextNode;
    nextNode.previous = newNode;
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
    previous.next.previous = previous;
    this.length--;
    return true;
  }
}

// var first = new Node("hi");
// first.next = new Node("how");
// first.next.next = new Node("are");
// first.next.next.next = new Node("you");

var list = new doublyLinkedList();
console.log(list.push(5));
console.log(list.pop());
console.log(list.push(7));
console.log(list.push(9));
// console.log(list.reverse());
// console.log(list);
console.log(list.shift());
console.log(list.unShift(55));
console.log(list.unShift(77));
console.log(list.unShift(11));
console.log(list.unShift(200));
console.log(list.unShift(3000));
console.log(list.get(4));
console.log(list.set(4, 88));
console.log(list.insert(4, "inserted"));
console.log(list.remove(3));
console.log(list.get(3));
// console.log(list);
// console.log(list.push(10));
// console.log(list.push(8));
// console.log(list.shift());
// console.log(list.unShift(100));
// console.log(list.get(1));
// console.log(list);
// console.log(list.set(7, 22));
// console.log(list.insert(1, "inserted"));
// console.log(list.remove(1));
// console.log(list.reverse());
// console.log(list);
