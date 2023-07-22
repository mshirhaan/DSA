function topView(root) {
    let n = 0;

    if(!root) return -1;
    let queue = [{pos: 0, node: root}];
    let map = {};
    let res = [];

    while(queue.length) {
        let curr = queue.shift();
        n++;
        // console.log(curr.node.val + " ==> " + curr.pos)
        if(!map[curr.pos]) {
            map[curr.pos] = curr.node;
        }
        if(curr.node.left) {
            queue.push({pos: curr.pos-1, node :curr.node.left});
        }
        if(curr.node.right) {
            queue.push({pos: curr.pos+1,node: curr.node.right});
        }
    }

    for(let i = -n; i<=n; i++) {
        if(map[i]!= undefined) {
            res.push(map[i].val);
        }
    }

    return res;
    
}
