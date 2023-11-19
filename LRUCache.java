class Node {
    int key;
    int value;
    Node prev;
    Node next;

    Node(int key, int value) {
        this.key = key;
        this.value = value;
    }
}

class LRUCache {
    Map<Integer,Node> map = new HashMap<>(); 
    int capacity;
    int currentSize = 0;
    Node MRU;
    Node LRU;


    public LRUCache(int capacity) {
        this.capacity = capacity;
    }
    
    public int get(int key) {
        if(map.containsKey(key)) {
            Node node =  map.get(key);
            updateMRU(node);
            return node.value;
        }
        return -1;
    }
    
    public void put(int key, int value) {
        Node node;

        //key already present, then update
        if(map.containsKey(key)) {
            node = map.get(key);
            node.value = value;
            updateMRU(node);
        } else {
            node = new Node(key, value);
            if(currentSize == capacity) {
                //evict
                Node temp = LRU;
                LRU = LRU.next;
                temp.next = null;
                if(LRU != null)
                    LRU.prev = null;
                currentSize--;
                map.remove(temp.key);
            }

            map.put(key, node);
            currentSize++;
            if(currentSize ==1) {
                LRU = node;
                MRU = node;
                return;
            }
            
            MRU.next = node;
            node.prev = MRU;
            MRU = node;
        }
    }

    private void updateMRU(Node node) {
        if(MRU == node) return;
        if(LRU == node) LRU = LRU.next;

        if(node.prev != null) {
            node.prev.next = node.next;
        }
        if(node.next != null) {
            node.next.prev = node.prev;
        }
        
        MRU.next = node;
        node.prev = MRU;
        node.next = null;
        MRU = node;
        
    }
}
