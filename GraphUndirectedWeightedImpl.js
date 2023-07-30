class Node {
    constructor(username) {
        this.username = username;
    }
}

class Graph {
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
}

let map = new Graph();
map.addNode('delhi');
map.addNode('mumbai');
map.addNode('mangalore');

map.addEdge('delhi', 'mumbai', 500);
