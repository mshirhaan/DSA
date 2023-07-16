//Best solution
var lowestCommonAncestor = function(root, p, q) {
    let curr = root;
    while(true) {
        if(
            curr.val == p.val ||
            curr.val == q.val ||
            (curr.val > p.val && curr.val < q.val) ||
            (curr.val < p.val && curr.val > q.val)
            ) {
            return curr;
        }
        if(curr.val > p.val) {
            curr = curr.left;
        } else {
            curr = curr.right;
        }
    }
};


//Not working in leetcode
var lowestCommonAncestor = function(root, p, q) {
    let pPath = binarySearch(root, p.val);
    let qPath = binarySearch(root, q.val);

    let i = 0;
    while(pPath[i].val == qPath[i].val) {
        i++;
    }
    i--;

    console.log(pPath[i]);
    return pPath[i];
};


function binarySearch(curr, key) {
    let path = [];

    while(curr) {
        path.push(curr);
        if(curr.val == key) {
            break;
        }
        if(key > curr.val) {
            curr = curr.right;
        } else {
            curr = curr.left;
        }
    }

    return path;
}
