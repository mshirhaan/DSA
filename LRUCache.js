class Node {
    constructor(key, val) {
        this.key = key;
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}


class DLL {
    constructor() {
        this.size = 0;
        this.head = null;
        this.tail = null;
    }

    //to the end
    add(node) {

        if(this.head == null) {
            this.head = node;
            this.tail = this.head;
            this.size++;
            return;
        }
        
        this.tail.next = node;
        node.prev = this.tail;
        this.tail = node;
        this.size++;
    }

    //from begenning
    remove() {
        let temp = this.head;
        this.head = this.head.next;
        temp.next = null;
        this.size--;
        return temp;
    }
}


class LRUCache {
    map = {};
    dll = new DLL();

    constructor(capacity) {
        this.capacity = capacity;
    }

    get(key) {
        
    }

    put(key, value) {
        let currentSize = Object.keys(this.map).length;
        let newNode = new Node(key, value);

        if(this.map[key]!=undefined) {
          //remove that node

            
        }

        else if(currentSize < this.capacity) {
            this.dll.add(newNode);
        } else {
            let leastRecentlyUsed = this.dll.remove();
            delete this.map[leastRecentlyUsed.key];
            this.dll.add(newNode);
        }
        this.map[key] = newNode;
        
    }
    
}
