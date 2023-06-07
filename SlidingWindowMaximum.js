/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
    let res = [];

    let dequeue = [];

    for(let i=0; i<k; i++) {
        while(dequeue.length && nums[i] > dequeue.at(-1)) {

            dequeue.pop();
        }
        dequeue.push(nums[i]);

    }

    res.push(dequeue[0]);


    let l = 0;
    let r = k;

    while(r<nums.length) {
        if(nums[l] == dequeue[0]) dequeue.shift();
        while(dequeue.length && nums[r] > dequeue.at(-1)) {
            dequeue.pop();
        }
        dequeue.push(nums[r]);
        res.push(dequeue[0]);
        l++;
        r++;
    }

    return res;
};
