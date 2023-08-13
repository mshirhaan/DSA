class PriorityQueue {
  constructor(){
    this.values = [];
  }
  enqueue(val, priority) {
    this.values.push({val, priority});
    this.sort();
  };
  dequeue() {
    return this.values.shift();
  };
  sort() {
    this.values.sort((a, b) => a.priority - b.priority);
  };
}


class Node {
    constructor(name) {
        this.name = name;
    }
}

class WeightedGraph {
    nodes = [];
    edges = {};
    
    addNode(name) {
        let node = new Node(name);
        this.nodes.push(node);
        this.edges[name] = [];
    }

    addEdge(node1, node2, weight) {
        this.edges[node1].push({name: node2, weight: weight});
        this.edges[node2].push({name: node1, weight: weight});
    }

    Dijkstra(source) {
        let distances = {};

        for(let node of this.nodes) {
            distances[node.name] = Infinity;
        }

        distances[source] = 0;

        let queue = new PriorityQueue();
        queue.enqueue(source, 0)

        while(queue.values.length) {
            let next = queue.dequeue();
            // next = {val: B, priority: 4}

            for(let edge of this.edges[next.val]) {
                if(edge.name == source) continue;

                if((next.priority + edge.weight) < distances[edge.name]) {
                    distances[edge.name] = next.priority + edge.weight;
                    queue.enqueue(edge.name, next.priority + edge.weight)
                }
            }
            
        }
        return distances;
    }
}

var graph = new WeightedGraph()
graph.addNode("A");
graph.addNode("B");
graph.addNode("C");
graph.addNode("D");
graph.addNode("E");
graph.addNode("F");

graph.addEdge("A","B", 4);
graph.addEdge("A","C", 4);
graph.addEdge("B","C", 2);
graph.addEdge("C","D", 3);
graph.addEdge("C","E", 1);
graph.addEdge("C","F", 6);
graph.addEdge("D","F", 2);
graph.addEdge("E","F", 3);


graph.Dijkstra("A");
