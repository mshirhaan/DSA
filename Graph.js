class Node {
    constructor(name) {
        this.name = name;
    }
}

class Graph {
    nodes = [];
    edges = new Map();
    
    addNode(name) {
        let node = new Node(name);
        this.nodes.push(node);
        this.edges.set(node, []);
    }

    addEdge(name1, name2) {
        let node1 = this.nodes.find((node)=>node.name == name1);
        let node2 = this.nodes.find((node)=>node.name == name2);
        this.edges.get(node1).push(node2);
        this.edges.get(node2).push(node1);
    }

}

let map = new Graph();
map.addNode('delhi');
map.addNode('mumbai');
map.addNode('mangalore');
map.addNode('Bangalore');
map.addNode('hyderabad');
map.addNode('kerala');

map.addEdge('delhi', 'mumbai');
map.addEdge('mangalore', 'Bangalore');
map.addEdge('hyderabad', 'mumbai');
map.addEdge('hyderabad', 'kerala');
map.addEdge('Bangalore', 'kerala');
map.addEdge('delhi', 'mangalore');
