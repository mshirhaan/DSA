let adjList = {
    A: ['B'],
    B: ['A'],
    C: ['D', 'E'],
    D: ['C','E'],
    E: ['C', 'D']
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


detectCycleBfs(adjList)
