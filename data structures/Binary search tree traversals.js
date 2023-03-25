class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class binarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    let newNode = new Node(value);
    if (this.root == null) {
      this.root = newNode;
      return this;
    }
    var current = this.root;
    while (true) {
      if (value === current.value) return false;

      if (value < current.value) {
        if (current.left == null) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else if (value > current.value) {
        if (current.right == null) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }

  find(value) {
    if ((this.root = null)) return false;
    let current = this.root;
    let found = flase;
    while (current && !found) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        return true;
      }
    }
    return false;
  }
  // breadth first search
  BFS() {
    let data = [];
    let queue = [];
    let node = null;
    // first step to place root node in queue
    queue.push(this.root);

    while (queue.length) {
      node = queue.shift();
      data.push(node.value);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return data;
  }
  // Depth first search pre order
  DFSPreorder() {
    let data = [];
    const traverse = (node) => {
      data.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    };

    traverse(this.root);
    return data;
  }
  DFSInorder() {
    let data = [];
    const traverse = (node) => {
      if (node.left) traverse(node.left);
      data.push(node.value);
      if (node.right) traverse(node.right);
    };

    traverse(this.root);
    return data;
  }
  DFSPostorder() {
    let data = [];
    const traverse = (node) => {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      data.push(node.value);
    };

    traverse(this.root);
    return data;
  }
}

let tree = new binarySearchTree();
// manuall adding of nodes
// tree.root = new Node(10);
// tree.root.right = new Node(15);
// tree.root.left = new Node(7);
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);
console.log(tree.BFS());
console.log(tree.DFSPreorder());
console.log(tree.DFSInorder());
console.log(tree.DFSPostorder());
