class Node {
    children = []; //26 references
    isWord = false;
}


class Trie {
    root = new Node();

    insert(word) {
        let curr = this.root;
        for(let i = 0; i<word.length; i++) {
            let index = word[i].charCodeAt() - "a".charCodeAt();
            if(curr.children[index] == undefined) {
                curr.children[index] = new Node();
            }
            curr = curr.children[index];
        }
        curr.isWord = true;
    }

    startsWith(word) {
        let curr = this.root;
        for(let i = 0; i<word.length; i++) {
            let index = word[i].charCodeAt() - "a".charCodeAt();
            if(curr.children[index] == undefined) {
                return false;
            }
            curr = curr.children[index];
        }
        return true;
    }

    search(word) {
        let curr = this.root;
        for(let i = 0; i<word.length; i++) {
            let index = word[i].charCodeAt() - "a".charCodeAt();
            if(curr.children[index] == undefined) {
                return false;
            }
            curr = curr.children[index];
        }
        return curr.isWord;
    }
}
