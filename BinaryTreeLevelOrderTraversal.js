var levelOrder = function(root) {
    let res = [];
    if(!root) return res;

    let queue = [root];

    while(queue.length) {
        let level = [];
        let len = queue.length;

        while(len>0) {
            let curr = queue.shift();
            level.push(curr.val);
            if(curr.left) {
                queue.push(curr.left);
            }
            if(curr.right) {
                queue.push(curr.right);
            }
            len--;
        }
        res.push(level);
    }
    return res;
};
