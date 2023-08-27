let adjList = {
    1: [3,4],
    2: [],
    3: [1],
    4: [2,3],
    5: [1,4]
}

function topo(adjList) {
    let visited = {};
    let ans = [];
    
    for(let key in adjList) {
        if(!visited[key]) {
            dfs(key)
        }
    }

    return ans;

    function dfs(node) {
        for(let dependency of adjList[node]) {
            if(visited[dependency]) continue;

            dfs(dependency);
            
        }
        visited[node] = true;
        ans.push(+node);
    }
}

topo(adjList)
