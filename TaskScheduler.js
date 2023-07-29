var leastInterval = function(tasks, n) {
    let maxHeap = new MaxHeap((a,b)=> b.count-a.count);
    let queue = [];

    //count frequency
    let map = {};
    for(let task of tasks) {
      map[task] = (map[task] || 0) + 1;
    }

    for(let key in map) {
      maxHeap.insert({letter: key, count: map[key], cooldown: 0})
    }

    let time = 0;
    while(queue.length > 0 || maxHeap.arr.length > 0) {
      time++;

        //check heap not empty
        if(maxHeap.arr.length != 0) {
              let curr = maxHeap.extractMax();
              curr.count--;
              if(curr.count!= 0) {
                  curr.cooldown = time + n;
                  queue.push(curr);
              }
        }
      
      if(queue.length > 0 && queue[0].cooldown == time) {
        maxHeap.insert(queue.shift());
      }
    }
    return time;
};

class MaxHeap {
    arr = [];

    constructor(compare) {
        this.compare = compare;
    }

    insert(val) {
        this.arr.push(val);
        this.arr.sort(this.compare);
    }

    extractMax() {
        if(this.arr.length == 0) return -1;
        return this.arr.shift();
    }
}
