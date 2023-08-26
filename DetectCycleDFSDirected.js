let adjList = {
    A: ['B'],
    B: [],
    C: ['D', 'E'],
    D: ['C','E'],
    E: ['C']
}

function detectCycleDfs(adjList) {
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
        for(let neighbour of adjList[node]) {
            if(visited[neighbour]) {
                return true;
            }
            if(dfs(neighbour) == true) {
                return true;
            }
        }
        return false;
    }
}

detectCycleDfs(adjList)
