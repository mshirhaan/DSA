/**
 * @param {string[]} words
 */
class WordFilter {
    map = {};
    isWord = false;
    index = -1;

    constructor(words) {
        if(!words) return;
        this.words = words;
        for(let i = 0; i<words.length; i++) {
            this.insert(words[i], i);
        }
    }

    insert(word, index) {
        let curr = this;
        for(let i = 0; i<word.length; i++) {
            let letter = word[i]
            if(curr.map[letter] == undefined) {
                curr.map[letter] = new WordFilter();
            }
            curr = curr.map[letter];
        }
        curr.isWord = true;
        curr.index = index;
    }

    f(pref, suff) {
        let prefMatchingWordsIndex = this.searchPref(pref);
        let prefMatchingWords = this.words.filter((word, index)=>prefMatchingWordsIndex.includes(index));
        //'apple','ape','applause', 'apzy'

        if(!suff) {
            return prefMatchingWords;
        }
        let prefMatchingWordsReversed = prefMatchingWords.map((word)=>word.split('').reverse().join(''));
        
        let reversedTrie = new WordFilter(prefMatchingWordsReversed);
        let reversedMatchingWords = reversedTrie.f(suff.split('').reverse().join(''));
        let matchingWords = reversedMatchingWords.map((word)=>word.split('').reverse().join(''));
        let answers = [];

        for(let word of matchingWords) {
            answers.push(this.words.findIndex((item)=>item == word));
        }
        return answers;
    }

    searchPref(pref) {
        let curr = this;

        for(let letter of pref) {
            if(curr.map[letter] == undefined) {
                return -1;
            }
            curr = curr.map[letter];
        }
        let indexes = [];
        dfs(curr, indexes);
        return indexes;

        function dfs(node, res) {
            if(node.isWord) {
                res.push(node.index);
            }
            for(let key in node.map) {
                dfs(node.map[key], res);
            }
        }
    }
};

