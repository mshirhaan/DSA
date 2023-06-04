/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    const map = {};

    for(const num of nums) {
        if(map[num] == undefined) {
            map[num] = 1;
        } else {
            map[num]++;
        }
    }

    const bucket = [];

    for(const key in map) {
        if(bucket[map[key]] == undefined) {
            bucket[map[key]] = [key];
        } else {
            bucket[map[key]].push(key);
        }
    }

    let count = 0;
    const result = [];

    for(let i = bucket.length-1; i >= 0; i--) {
        if(bucket[i]) {
            for(let num of bucket[i]) {
                result.push(num);
                count++;
                if(count == k) {
                    return result;
                }
            }
        }
    }
};
