let adjList = {
    A: ['B'],
    B: ['A'],
    C: ['D', 'E'],
    D: ['C','E'],
    E: ['C', 'D']
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

function detectCycleBfs(adjList) {
    let visited = {};
    for(let key in adjList) {
        if(visited[key]) {
            continue;
        }
        if(bfs(key) == true) {
            return true;
        }
    }
    return false;

    function bfs(key) {
        let queue = [[key, -1]];
        visited[key] = true;
        while(queue.length) {
            let [curr, parent] = queue.shift();
            for(let neighbour of adjList[curr]) {
                if(neighbour == parent) {
                    continue;
                }
                if(visited[neighbour]) return true;
                queue.push([neighbour, curr]);
                visited[neighbour] = true;
            }
        }
    }  
}


//detectCycleDfs(adjList)

detectCycleBfs(adjList)
