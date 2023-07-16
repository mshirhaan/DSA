var verticalTraversal = function(root) {
    let map = {};

    let queue = [{node: root, x: 0, y: 0}];

    let n = 0;

    while(queue.length) {
        let curr = queue.shift();
        n++;
        if(map[curr.y]) {
            if(map[curr.y][curr.x]) {
                map[curr.y][curr.x].push(curr.node.val);
            }   else {
                    map[curr.y][curr.x] = [];
                    map[curr.y][curr.x].push(curr.node.val);
            }
        } else {
            map[curr.y] = {};
            map[curr.y][curr.x] = [];
            map[curr.y][curr.x].push(curr.node.val);
        }
        if(curr.node.left) {
            queue.push({node: curr.node.left, x:curr.x+1, y: curr.y-1});
        }
        if(curr.node.right) {
            queue.push({node: curr.node.right,x:curr.x+1, y: curr.y+1});
        }
    }

    let res = [];
    for(let i = -n; i<=n; i++) {
        if(map[i]) {
            let vertical = [];
            for(let j = 0; j<=n; j++) {
                if(map[i][j]) {
                    vertical.push(...map[i][j].sort((a,b)=>a-b));
                }
            }
            res.push(vertical);
        }
    }

    return res;
}
