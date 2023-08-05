class Node {
    constructor(name) {
        this.name = name;
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

    addEdge(node1, node2) {
        this.edges[node1].push(node2);
        this.edges[node2].push(node1);
    }

    dfs(start = this.nodes[0], map = {}) {
        map[start] = true;
        for(let node of this.edges[start]) {
            if(map[node] == true) continue;
            console.log(node);
            map[node] = true;
            this.dfs(node, map);
        }
    }

    bfs(start = this.nodes[0]) {
        let map = {[start]: true};
        let queue = [start];
        while(queue.length) {
            let curr = queue.shift();
            console.log(curr);
            for(let node of this.edges[curr]) {
                if(map[node]) continue;
                queue.push(node);
                map[node] = true;
            }
        }
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

// map.dfs('hyderabad')

// console.log('dfs ends')

map.bfs('hyderabad')
