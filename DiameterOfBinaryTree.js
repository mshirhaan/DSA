// O(n2) Top down solution using existing BFS and maxDepth logic from https://leetcode.com/problems/maximum-depth-of-binary-tree/description/

var diameterOfBinaryTree = function(root) {
        let max = 0;

        if(!root) return max;
        let queue = [root];

        while(queue.length) {
            let curr = queue.shift();
            let left = maxDepth(curr.left);
            let right = maxDepth(curr.right);
            let sum = left+right;
            if(sum>max) max = sum;

            if(curr.left) {
                queue.push(curr.left);
            }
            if(curr.right) {
                queue.push(curr.right);
            }
        }

        return max;
    }

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

//Above solution using DP(hashmap saving already computed value) - 100/104 cases passed. Yet to fix
var diameterOfBinaryTree = function(root) {

        let max = 0;
        let hashmap = {};

        if(!root) return max;
        let queue = [root];

        while(queue.length) {
            let curr = queue.shift();
            if(hashmap[curr]) {
                max = Math.max(max, hashmap[curr] - 1);
            } else {
                let left = maxDepth(curr.left, hashmap);
                let right = maxDepth(curr.right, hashmap);
                let sum = left+right;
                max = Math.max(max, sum);
            }
            if(curr.left) {
                queue.push(curr.left);
            }
            if(curr.right) {
                queue.push(curr.right);
            }
        }

        return max;
    }

var maxDepth = function(root, hashmap) {

      return helper(root);
      
      function helper(node) {
          if(!node) {
              return 0;
          }

          let left = helper(node.left);
          let right = helper(node.right);
          hashmap[node] =  1 + Math.max(left, right);
          return hashmap[node];
      }
}; 



// Bottom up solution
Assignment

