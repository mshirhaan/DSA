let adjList = {
    A: ['B'],
    B: ['C'],
    C: ['D', 'F'],
    D: ['E'],
    E: ['X'],
    F: ['E'],
    
    X: ['Y'],
    Y: ['Z'],
    Z: []
}

function detectCycleDfs(adjList) {
    let callstackMap = {};
    let visited = {};
    
    for(let key in adjList) {
        if(visited[key]) {
            continue;
        }
        if(dfs(key) == true) {
            return true;
        }
        
    } 
    return false;

    function dfs(node) {
        visited[node] = true;
        if(callstackMap[node] == true) {
            return true;
        }
        callstackMap[node] = true;
        for(let neighbour of adjList[node]) {
            if(dfs(neighbour) == true) {
                return true;
            }
        }
        delete callstackMap[node];
        return false;
    }
}

detectCycleDfs(adjList)
