let adjList = {
    A: ['B'],
    B: ['A', 'C'],
    C: ['B','E'],
    E: ['C']
}

function detectCycleDfs(adjList) {
    let visited = {};
    return dfs('A' , -1);

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
