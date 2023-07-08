class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class BTree {
    constructor() {
        this.root = null;
    }

    add(val) {

        
        let node = new Node(val);


        if(this.root == null) {
            this.root = node;
            return;
        }
        
        let queue = [this.root];

        let curr;

        while(true) {
            curr = queue.shift();
            if(curr.left == null ) {
                curr.left = node;
                break;
            } else if(curr.right == null) {
                curr.right = node;
                break;
            } else {
                queue.push(curr.left);
                queue.push(curr.right);
            }
        }
    }
}

let btree = new BTree();
