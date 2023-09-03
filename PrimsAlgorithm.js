let adjList = {
    0: [[2, 5], [1,2]],
    1: [[0, 2], [2,1], [3,3]],
    2: [[0, 5], [1,1], [3,5]],
    3: [[1, 3], [2,5], [4,2]],
    4: [[1, 4], [3,2]],
}

class PriorityQueue {
    queue = [];
    size = 0;

    push (weight, node) {
        this.queue.push([weight, node]);
        this.queue.sort((a,b) => a[0] - b[0]);
        this.size++;
    }

    pop() {
        if(this.size ==0) {
            return -1;
        }
        this.size--;
       return this.queue.shift();
        
    }
}


function prims() {
    let pq = new PriorityQueue();

    pq.push(0,0);
    let sum = 0;

    let visited = {};

    while(pq.size) {
        let [weight, node] = pq.pop();
        if(visited[node]) continue;
        visited[node] = true;
        sum+=weight;
        adjList[node].forEach(([neighbor, weight]) => {
            if(!visited[neighbor]) {
                pq.push(weight, neighbor);
            }
        })
    }
    return sum;
}

prims()
