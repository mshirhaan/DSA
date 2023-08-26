function bellman(start, adjList, distance) {

    let n = Object.keys(distance).length;

    for(let i = 0; i<n-1; i++) {
        for(let source in adjList) {
            if(distance[source] == Infinity) {
                continue;
            }
            for(let edge of adjList[source]) {
                let destination = edge[0];
                let weight = edge[1];
                
                if(distance[destination] > (distance[source] + weight)) {
                    distance[destination] = distance[source] + weight;
                }
            }
        }
    }


    for(let source in adjList) {
            if(distance[source] == Infinity) {
                continue;
            }
            for(let edge of adjList[source]) {
                let destination = edge[0];
                let weight = edge[1];
                
                if(distance[destination] > (distance[source] + weight)) {
                    return -1;
                }
            }
    }
    

    return distance;
    
}

let adjList = {
    A: [['B', 4], ['C', 2]],
    B: [['C', 3], ['D', 2], ['E', 3]],
    C: [['B', 1], ['D', 4], ['E', 5]],
    E: [['D', -5], ['A', -6]]
}

let distance = {
    A: 0,
    B: Infinity,
    C: Infinity,
    D: Infinity,
    E: Infinity,
}

bellman('A', adjList, distance);
