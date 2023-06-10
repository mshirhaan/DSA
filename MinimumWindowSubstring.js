/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s1, s2) {
    
    if(s2.length>s1.length) {
        return "";
    }
    let map1 = {};
    let map2 = {};
    
    let need = 0;
    
    for(let i = 0; i<s2.length; i++) {
        map2[s2[i]] = (map2[s2[i]] || 0) + 1;
        need++;
    }
    
    let have = 0;
    let l = 0;
    let r = 0;
    let pos = [];
    let length = Infinity;
    
    while(r<s1.length) {
        let current = s1[r];
        if(map2[current]) {
            map1[current] = (map1[current] || 0) + 1;
            
            if(map1[current] <= map2[current]) {
                have++;
                while(have == need &&l<=r) {
                    if(r-l+1 < length) {
                        length = r - l+1;
                        pos = [l,r];
                    }
                    if(map1[s1[l]]) {
                        map1[s1[l]]--;
                        if(map1[s1[l]] < map2[s1[l]])
                            have--;
                        
                    }
                    l++;
                }
            }
        }
        r++;
    }

    if(pos[0] == undefined) {
        return "";
    }
    return s1.slice(pos[0], pos[1]+1);
}
