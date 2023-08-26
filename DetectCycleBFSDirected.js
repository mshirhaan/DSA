let adjList = {
    A: ['B'],
    B: [],
    C: ['D', 'E'],
    D: ['C','E'],
    E: ['C']
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
        let queue = [key];
        visited[key] = true;
        while(queue.length) {
            let curr = queue.shift();
            for(let neighbour of adjList[curr]) {
                if(visited[neighbour]) return true;
                queue.push(neighbour);
                visited[neighbour] = true;
            }
        }
    }  
}

detectCycleBfs(adjList)
