// the priority queue is a heap class
// that is we have used heap data structure
class PriorityQueue {
  constructor(value) {
    this.values = [];
  }

  bubbleUp = () => {
    let index = this.values.length - 1;
    const element = this.values[index];
    while (index > 0) {
      let parentIdx = Math.floor((index - 1) / 2);
      let parent = this.values[parentIdx];
      if (element.priority > parent.priority) {
        [this.values[index], this.values[parentIdx]] = [parent, element];
        index = parentIdx;
      } else {
        break;
      }
    }
  };

  enQueue(value, priority) {
    let newNode = new Node(value, priority);
    this.values.push(newNode);
    this.bubbleUp();
  }

  bubbleDown = () => {
    let idx = 0;
    // finding its children
    const length = this.values.length;

    const element = this.values[0];
    while (true) {
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
      let leftChild, rightChild;
      let swap = null;

      // check if children index are in bounds
      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx];
        if (leftChild.priority > element.priority) {
          swap = leftChildIdx;
        }
      }
      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];
        if (
          rightChild.priority > leftChild.priority &&
          rightChild.priority > element.priority
        ) {
          swap = rightChildIdx;
        }
      }

      if (swap == null) break;

      [this.values[idx], this.values[swap]] = [
        this.values[swap],
        this.values[idx],
      ];
      idx = swap;
    }
  };

  deQueue() {
    let max = this.values[0];
    let end = this.values.pop();

    // edge case senario
    if (this.values.length > 0) {
      this.values[0] = end;
      this.bubbleDown();
    }
    return max;
  }
}

class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}
let hospital = new PriorityQueue();
// high number high priority in this implementation
hospital.enQueue("common cold", 1);
hospital.enQueue("gun shot wound", 5);
hospital.enQueue("high fever", 2);
hospital.enQueue("fracture", 3);
console.log(hospital.values);
hospital.deQueue();
console.log(hospital.values);
