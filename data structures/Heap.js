// taaking a array and adding new element at the end of array
// the new value will bubble up to its position

// formula to find a child
// left child = n*2+1
// left child = n*2+2
// formula to find a parent
// parent = floor((n-1)/2)

// unlike tree we are going to use direct array and use formulae to change position0

class maxBinaryHeap {
  constructor(value) {
    this.values = [41, 39, 33, 18, 27, 12];
  }

  bubbleUp = () => {
    let index = this.values.length - 1;
    const element = this.values[index];
    while (index > 0) {
      let parentIdx = Math.floor((index - 1) / 2);
      let parent = this.values[parentIdx];
      if (element > parent) {
        [this.values[index], this.values[parentIdx]] = [parent, element];
        index = parentIdx;
      } else {
        break;
      }
    }
  };

  insert(value) {
    this.values.push(value);
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
        if (leftChild > element) {
          swap = leftChildIdx;
        }
      }
      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];
        if (rightChild > leftChild && rightChild > element) {
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

  // for remove we, only remove the root element
  // for that we swap the root and the last element then, pop out the last element
  // then we take the new root element and use bubble down to take it to is proper position

  // remove is also called extract max
  extractMax() {
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

let heap = new maxBinaryHeap();
heap.insert(55);
// heap.insert(45);
console.log(heap.values);
heap.extractMax();
heap.extractMax();
heap.extractMax();
heap.extractMax();
heap.extractMax();
heap.extractMax();
console.log(heap.values);
heap.extractMax();
console.log(heap.values);
