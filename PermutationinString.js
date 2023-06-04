/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    let map1 = {};

    for(let char of s1) {
        map1[char] = (map1[char] || 0) + 1;
    }

    let map2 = {}

    for(let i = 0; i<s1.length; i++) {
        map2[s2[i]] = (map2[s2[i]] || 0) + 1;
    }


    let i = 0;
    let j = s1.length-1;

    while(j<s2.length) {
        if(Object.keys(map1).length == Object.keys(map2).length) {
            let flag = true;
            for(let key in map1) {
                if(map1[key] != map2[key]) {
                    flag = false;
                    break;
                }
            }
            if(flag) {
                return true;
            }
        }
        map2[s2[i]]--;
        if(map2[s2[i]] == 0) {
            delete map2[s2[i]]
        }
        i++;
        j++;
        map2[s2[j]] = (map2[s2[j]] || 0) + 1
    }

    return false;
};
