let adjList = {
    A: ['B'],
    B: ['A', 'C'],
    C: ['B','E'],
    E: ['C']
}

function detectCycleDfs(adjList) {
    let visited = {};
    for(let key in adjList) {
        if(visited[key]) {
            continue;
        }
        if(dfs(key , -1) == true) {
            return true;
        }
    }
    return false;

    function dfs(node, parent) {
        visited[node] = true;
        for(let neighbour of adjList[node]) {
            if(neighbour == parent) {
                continue;
            }
            if(visited[neighbour]) {
                return true;
            }
            if(dfs(neighbour, node) == true) {
                return true;
            }
        }
        return false;
    }
}

detectCycleDfs(adjList)
