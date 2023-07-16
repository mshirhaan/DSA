//Using BFS level order and reversing res later

var zigzagLevelOrder = function(root) {
    let res = [];
    if(!root) return res;

    let queue = [root];

    let isRight = false;

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
        if(isRight) {
            level.reverse();
        }
        res.push(level);
        isRight = !isRight;
    }
    return res;
};


//Efficient

