//  i did not understand the code
// the code is wrong!!!!!!
// mistake some where

// it is algorithm to find the shortest path between vertices in a graph
class priorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(val, priority) {
    this.values.push({ val, priority });
    this.sort();
  }

  dequeue() {
    return this.values.shift();
  }

  sort() {
    this.values.filter((a, b) => a.priority - b.priority);
  }
}

class weightedGraph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex = (vertex) => {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  };

  addEdge = (vertex1, vertex2, weight) => {
    if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
      this.adjacencyList[vertex1].push({ node: vertex2, weight });
      this.adjacencyList[vertex2].push({ node: vertex1, weight });
    }
  };

  dijkstras(start, finish) {
    const nodes = new priorityQueue();
    const distances = {};
    const previous = {};
    let smallest;
    const path = [];
    // building up initial state
    for (let vertex in this.adjacencyList) {
      if (vertex == start) {
        distances[vertex] = 0;
        nodes.enqueue(vertex, 0);
      } else {
        distances[vertex] = Infinity;
        nodes.enqueue(vertex, Infinity);
      }
      previous[vertex] = null;
    }
    while (nodes.values.length) {
      smallest = nodes.dequeue().val;
      if (smallest == finish) {
        // done and need to build path
        while (previous[smallest]) {
          path.push(smallest);
          smallest = previous[smallest];
        }
        return path;
      }
      if (smallest || distances[smallest] != Infinity) {
        this.adjacencyList[smallest].map((neighbor) => {
          // calculate new distance to neighboring node
          let candidate = distances[smallest] + neighbor.weight;
          if (candidate < distances[neighbor.node]) {
            distances[neighbor.node] = candidate;
            previous[neighbor.node] = smallest;
            nodes.enqueue(neighbor.node, candidate);
          }
        });
      }
    }
  }
}

let g = new weightedGraph();

g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");

g.addEdge("A", "B", 4);
g.addEdge("A", "C", 2);
g.addEdge("B", "E", 3);
g.addEdge("C", "D", 2);
g.addEdge("C", "F", 4);
g.addEdge("D", "E", 3);
g.addEdge("D", "F", 1);
g.addEdge("E", "F", 1);

console.log(g.dijkstras("A", "E"));
