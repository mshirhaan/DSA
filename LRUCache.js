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



========
//java

class Node {
    public int key;
    public int val;
    public Node next;
    public Node prev;

    public Node(int key, int val) {
        this.key = key;
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DLL {
    public int size;
    public Node head;
    public Node tail;

    public DLL() {
        this.size = 0;
        this.head = null;
        this.tail = null;
    }

    // Add to the end
    public void add(Node node) {
        if (this.head == null) {
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

    // Remove from the beginning
    public Node remove() {
        Node temp = this.head;
        this.head = this.head.next;
        temp.next = null;
        this.size--;
        return temp;
    }
}

class LRUCache {
    private Map<Integer, Node> map;
    private DLL dll;
    private int capacity;

    public LRUCache(int capacity) {
        this.map = new HashMap<>();
        this.dll = new DLL();
        this.capacity = capacity;
    }

    public int get(int key) {
        // Implementation for get() method goes here
    }

    public void put(int key, int value) {
        int currentSize = this.map.size();
        Node newNode = new Node(key, value);

        if (this.map.containsKey(key)) {
            // Remove the existing node
            Node existingNode = this.map.get(key);
            removeNode(existingNode);
        } else if (currentSize >= this.capacity) {
            // Remove the least recently used node
            Node leastRecentlyUsed = this.dll.remove();
            this.map.remove(leastRecentlyUsed.key);
        }

        this.dll.add(newNode);
        this.map.put(key, newNode);
    }

    private void removeNode(Node node) {
        if (node.prev != null) {
            node.prev.next = node.next;
        } else {
            this.dll.head = node.next;
        }

        if (node.next != null) {
            node.next.prev = node.prev;
        } else {
            this.dll.tail = node.prev;
        }

        node.next = null;
        node.prev = null;
        this.dll.size--;
    }
}


=========
//python
class Node:
    def __init__(self, key, val):
        self.key = key
        self.val = val
        self.next = None
        self.prev = None


class DLL:
    def __init__(self):
        self.size = 0
        self.head = None
        self.tail = None

    # Add to the end
    def add(self, node):
        if self.head is None:
            self.head = node
            self.tail = self.head
            self.size += 1
            return

        self.tail.next = node
        node.prev = self.tail
        self.tail = node
        self.size += 1

    # Remove from the beginning
    def remove(self):
        temp = self.head
        self.head = self.head.next
        temp.next = None
        self.size -= 1
        return temp


class LRUCache:
    def __init__(self, capacity):
        self.map = {}
        self.dll = DLL()
        self.capacity = capacity

    def get(self, key):
        if key in self.map:
            node = self.map[key]
            self.dll.remove_node(node)
            self.dll.add(node)
            return node.val
        return -1

    def put(self, key, value):
        if key in self.map:
            node = self.map[key]
            self.dll.remove_node(node)
        elif len(self.map) >= self.capacity:
            lru_node = self.dll.remove()
            del self.map[lru_node.key]

        new_node = Node(key, value)
        self.dll.add(new_node)
        self.map[key] = new_node

    def remove_node(self, node):
        if node.prev is not None:
            node.prev.next = node.next
        else:
            self.dll.head = node.next

        if node.next is not None:
            node.next.prev = node.prev
        else:
            self.dll.tail = node.prev

        node.next = None
        node.prev = None
        self.dll.size -= 1
