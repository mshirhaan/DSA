//left child = i*2+1
//right child = i*2+2
//parent = Math.floor((i-1)/2)

class MaxHeap {
    arr = [];
    size = 0;

    insert(val) {
        this.arr[this.size] = val;
        this.bubbleUp();
        this.size++;
    }

    //O(log(n))
    bubbleUp() {
        let currentIdx = this.size;
        
        while(currentIdx!=0) {
            let curr = this.arr[currentIdx];
            let parentIdx = Math.floor((currentIdx-1)/2);
            let parent = this.arr[parentIdx];
            if(parent >= curr) {
                return;
            }
            let temp = this.arr[parentIdx];
            this.arr[parentIdx] = this.arr[currentIdx];
            this.arr[currentIdx] = temp;

            currentIdx = parentIdx;
        }
    }

    extractMax() {
        if(this.size == 0) return -1;
        let max = this.arr[0];
        if(this.size == 1) {
            this.arr.pop();
            this.size--;
            return max;
        }

        this.arr[0] = this.arr[this.size-1];
        this.arr.pop();
        this.size--;
        this.bubbleDown();

        return max;
    }


    bubbleDown() {
        let currentIdx = 0;

        while(currentIdx<this.size) {
            let leftChildIdx = currentIdx*2+1;
            let rightChildIdx = currentIdx*2+2;
    
            let curr = this.arr[currentIdx];
            let left = this.arr[leftChildIdx];
            let right = this.arr[rightChildIdx];
    
            if((left == undefined || curr > left) && (right == undefined || curr > right)) {
                return;
            }
            
            if((right == undefined) || (left > right)) {
                let temp = this.arr[currentIdx];
                this.arr[currentIdx] = this.arr[leftChildIdx];
                this.arr[leftChildIdx] = temp;
                currentIdx = leftChildIdx;
            } else {
                let temp = this.arr[currentIdx];
                this.arr[currentIdx] = this.arr[rightChildIdx];
                this.arr[rightChildIdx] = temp;
                currentIdx = rightChildIdx;
            }
        }
    }
}

let res = [9,8,4,7,1,2,3];
let maxHeap = new MaxHeap();
for(let num of arr) {
    maxHeap.insert(num);
}


//Starting structure looks like this [9, 7, 8, 2, 1, 3, 4]
maxHeap.extractMax();
