var cloneGraph = function(node, map = new Map()) {
    if(!node) return null;

    let newNode = new Node(node.val, []);
    map.set(node, newNode);

    for(let neighbor of node.neighbors) {
        if(map.get(neighbor)) {
            newNode.neighbors.push(map.get(neighbor));
        } else {
            newNode.neighbors.push(cloneGraph(neighbor, map));
        }
    }
    return newNode;
};
