/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {

    let map = {};
    
    for(let i = 0; i < strs.length; i++) {
        let s = strs[i];
        
        let leader = [];
        for(let i = 0 ;i<s.length; i++) {
            leader[s[i].charCodeAt(0)-97]= (leader[s[i].charCodeAt(0)-97] || 0) + 1;
        }

        map[leader] ? map[leader].push(s) : map[leader] = [s];
    }

    return Object.values(map)



};
