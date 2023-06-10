
class MinStack {
    constructor() {
        this.stack = [];
        this.min = [];
    }

    push (val) {
        let last = this.min.length-1;
        this.stack.push(val);
        if( last<0 || val < this.min[last]) {
            this.min.push(val);
        } else {
            this.min.push(this.min[last]);
        }
    }
    
    pop () {
        this.stack.pop();
        this.min.pop();
    }
    
    top () {
        return this.stack[this.stack.length-1];
    }
    
    getMin() {
        return this.min[this.min.length-1];
    }
};




/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
