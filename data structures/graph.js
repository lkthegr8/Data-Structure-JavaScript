class graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex = (vertex) => {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  };

  addEdge = (vertex1, vertex2) => {
    if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
      this.adjacencyList[vertex1].push(vertex2);
      this.adjacencyList[vertex2].push(vertex1);
    }
  };

  removeEdge = (vertex1, vertex2) => {
    if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
      this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
        (v) => v !== vertex2
      );
      this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
        (v) => v !== vertex1
      );
    }
  };

  removeVertex = (vertex) => {
    if (this.adjacencyList[vertex]) {
      this.adjacencyList[vertex].map((v) => {
        this.adjacencyList[v] = this.adjacencyList[v].filter(
          (v) => v !== vertex
        );
      });
      delete this.adjacencyList[vertex];
    }
  };

  //   Depth first search using recursive method
  recursiveDFS = (start) => {
    const result = [];
    const visited = [];
    // for context reference
    const adjacencyList = this.adjacencyList;

    (function DFS(vertex) {
      if (!vertex) return null;
      result.push(vertex);
      visited.push(vertex);
      adjacencyList[vertex].forEach((neighbour) => {
        if (!visited.includes(neighbour)) {
          return DFS(neighbour);
        }
      });
    })(start);

    return result;
  };

  //   Depth first search using iterative method
  iterativeDFS = (start) => {
    // preinitialised
    const stack = [start];
    const result = [];
    const visited = [start];
    let currentVertex;
    // for context reference
    // const adjacencyList = this.adjacencyList;
    while (stack.length) {
      currentVertex = stack.pop();
      result.push(currentVertex);

      this.adjacencyList[currentVertex].forEach((neighbour) => {
        if (!visited.includes(neighbour)) {
          visited.push(neighbour);
          stack.push(neighbour);
        }
      });
    }
    return result;
  };

  //   Breadth first search using iterative method
  iterativeBFS = (start) => {
    // preinitialised
    const queue = [start];
    const result = [];
    const visited = [start];
    let currentVertex;
    // for context reference
    // const adjacencyList = this.adjacencyList;
    while (queue.length) {
      currentVertex = queue.shift();
      result.push(currentVertex);

      this.adjacencyList[currentVertex].forEach((neighbour) => {
        if (!visited.includes(neighbour)) {
          visited.push(neighbour);
          queue.push(neighbour);
        }
      });
    }
    return result;
  };
}

let g = new graph();
// g.addVertex("INDIA");
// g.addVertex("USA");
// g.addVertex("RUSSIA");
// g.addVertex("CHINA");
// // console.log(g.adjacencyList);
// // g.adjacencyList.INDIA.push(7);
// // g.addVertex("INDIA");
// g.addEdge("USA", "INDIA");
// g.addEdge("RUSSIA", "INDIA");
// g.addEdge("USA", "RUSSIA");
// // console.log(g.adjacencyList);
// g.removeEdge("RUSSIA", "USA");
// // console.log(g.adjacencyList);
// g.addEdge("INDIA", "CHINA");
// g.addEdge("RUSSIA", "CHINA");
// g.addEdge("USA", "CHINA");

// console.log(g.adjacencyList);
// g.removeVertex("CHINA");
// console.log(g.adjacencyList);

g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");
// adding edges
g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("B", "D");
g.addEdge("C", "E");
g.addEdge("D", "E");
g.addEdge("D", "F");
g.addEdge("E", "F");
console.log(g.adjacencyList);
console.log(g.recursiveDFS("A"));
console.log(g.iterativeDFS("A"));
console.log(g.iterativeBFS("A"));
