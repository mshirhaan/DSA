let adjList = {
    1: [3,4],
    2: [],
    3: [],
    4: [2,3],
    5: [1,4]
}

//Kahn's
function topoBFS() {
    let inDegree = {};
    let ans = [];
    for(let key in adjList) {
        inDegree[key] = 0;
    }

    for(let key in adjList) {
        for(let dependency of adjList[key]) {
            inDegree[dependency]++;
        }
    }

    let queue = [];

    for(let key in inDegree) {
        if(inDegree[key] == 0) {
            queue.push(key);
        }
    }

    while(queue.length) {
        let curr = queue.shift();
        ans.push(+curr);
        for(let dependency of adjList[curr]) {
            inDegree[dependency]--;
            if(inDegree[dependency] == 0) {
                queue.push(dependency);
            }
        }
    }

    return ans;
}

topoBFS(adjList);
