//BFS using 2 loops

var maxDepth = function(root) {

        if(!root) return 0;
        let count = 0;
        let queue = [root];

        while(queue.length) {
            count++;
            let len = queue.length;

            while(len>0) {
                let curr = queue.shift();
                if(curr.left) {
                    queue.push(curr.left);
                }
                if(curr.right) {
                    queue.push(curr.right);
                }
                len--;
            }
        }

        return count;
};



//Using recursion
var maxDepth = function(root) {
      return helper(root);
  
      function helper(node) {
          if(!node) {
              return 0;
          }
          let left = helper(node.left);
          let right = helper(node.right);
          return 1 + Math.max(left, right);
      }
};
