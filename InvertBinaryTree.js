//Recursion
var invertTree = function(root) {
    if(!root) return root;

    helper(root);
    return root;

    function helper(node) {
        if(!node) return;

        let temp = node.left;
        node.left = node.right;
        node.right = temp;

        helper(node.left);
        helper(node.right);
    }
};


//Loop
var invertTree = function(root) {
    if(!root) return root;

    let queue = [root];

    while(queue.length) {
        let curr = queue.shift();

        if(curr.left) {
            queue.push(curr.left);
        }
        if(curr.right) {
            queue.push(curr.right);
        }

        let temp = curr.right;
        curr.right = curr.left;
        curr.left = temp;
    }
    return root;
};
