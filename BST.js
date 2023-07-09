class Node {
    constructor(val) {
        this.val = {data: val, count: 1};
        this.left = null;
        this.right = null;
    }
}

class BST {
    root = null;

    insert(val) {
        let node = new Node(val);

        if(this.root == null) {
            this.root = node;
            return;
        }

        helper(this.root, node);

        function helper(parent, node) {
            if(node.val.data == parent.val.data) {
                parent.val.count++;
            }

            if(node.val.data > parent.val.data) {
                if(parent.right == null) {
                    parent.right = node;
                    return;
                }
                helper(parent.right, node);
            } else {
                if(parent.left == null) {
                    parent.left = node;
                    return;
                }
                helper(parent.left, node);
            }
        }
    }

    search(val) {
        return helper(this.root, val);


        function helper(node, val) {
            if(node == null) {
                return null;
            }
            if(node.val.data == val) {
                return node;
            }
            if(val > node.val.data) {
                return helper(node.right, val);
            } else {
                return helper(node.left, val);
            }
        }
    }

    bfs() {
        if(!this.root) return -1;
        let queue = [this.root];

        while(queue.length) {
            let curr = queue.shift();
            console.log(curr.val.data);
            if(curr.left) {
                queue.push(curr.left);
            }
            if(curr.right) {
                queue.push(curr.right);
            }
        }
    }

    dfs_inorder(node = this.root) {

        if(node.left)
            this.dfs_inorder(node.left);
        
        console.log(node.val.data);
        
        if(node.right)
            this.dfs_inorder(node.right);
    }

    dfs_preorder(node = this.root) {
        console.log(node.val.data);
        if(node.left)
            this.dfs_preorder(node.left);
        
        if(node.right)
            this.dfs_preorder(node.right);
    }

    dfs_postorder(node = this.root) {
        if(node.left)
            this.dfs_postorder(node.left);
        
        if(node.right)
            this.dfs_postorder(node.right);
        
        console.log(node.val.data);
    }

    remove(val) {

        dfs_preorder(this.root, null, val, null);
        
        function dfs_preorder(node, parent, val, direction) {
            if(node.val.data == val) {

                // if(direction == null) {
                //     if(node.left)
                //     return;
                // }

                
                if(node.left) {
                    if(direction == "left") {
                        parent.left = node.left;
                    } else if(direction == "right") {
                        parent.right = node.left;
                    }
                   
                    if(node.right) {
                        attachRightHelper(node.left, node.right);
                    }
                    
                } else if(node.right) {
                    if(direction == "left") {
                        parent.left = node.right;
                    } else if(direction == "right") {
                        parent.right = node.right;
                    }
                    
                } else {
                    parent.left = null;
                }
                return node;
            }
            let left = null;
            if(node.left)
                left = dfs_preorder(node.left, node, val, "left");
            if(left!=null) {
                return left;
            }
            if(node.right)
                return dfs_preorder(node.right, node, val, "right");

            return null;
        }

        //attach second as the right child to the right most leaf
        function attachRightHelper(first, second) {
            if(!first.right) {
                first.right = second;
                return;
            }
            attachRightHelper(first.right, second);
        }
        
    }
}

let bst = new BST();

bst.insert(5);
bst.insert(45);
bst.insert(65);

bst.insert(2);
bst.insert(15);
bst.insert(97);
bst.insert(44);
