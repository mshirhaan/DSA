var findOrder = function(numCourses, prerequisites) {
    let adjList = {};
    for(let i = 0; i < numCourses; i++) {
        adjList[i] = [];
    }
    for(let [course, dependency] of prerequisites) {
      adjList[course].push(dependency);
    }

    return topoBFSCycleDetection(adjList, numCourses);
};

//Kahn's
function topoBFSCycleDetection(adjList, n) {
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

    if(n == ans.length) {
        return ans.reverse();
    }
    return [];
}
