class Node {
    String value;

    Node next = null;

    Node(String value) {
        this.value = value;
    }
}

public class LinkedList {

    Node head = null;
    Node tail = null;
    int size = 0;


    //O(1)
    public void addLast(String value) {
        if(this.head == null) {
            this.head = new Node(value);
            this.tail = head;
        } else {
            Node node = new Node(value);
            this.tail.next = node;
            this.tail = node;
        }
        size++;
    }

    //O(1)
    public Node removeFirst() {

        if(this.head == null) {
            return null;
        }
        Node curr = this.head;
        this.head = this.head.next;
        curr.next = null;
        this.size--;
        return curr;
    }

    //O(n)
    public Node removeLast() {
        if(this.size == 0) {
            return null;
        }
        Node curr;
        if(this.size == 1) {
            curr = this.head;
            this.head = null;
            this.tail = null;
        } else {
            curr = this.head;
            while(curr.next.next != null) {
                curr = curr.next;
            }
            Node temp = curr.next;
            curr.next = null;
            this.tail = curr;
            curr = temp;
        }
        this.size--;
        return curr;
    }

    //O(1)
    public void addFirst(String value) {
        Node node = new Node(value);
        node.next = this.head;
        this.head = node;
        this.size++;
    }


    //O(n)
    public String remove(int index) {
        if(index+1 > size) {
            return null;
        }

        if(index == 0 || this.size == 1) {
            Node temp = this.removeFirst();
            return temp.value;
        }

        int count = 0;
        Node curr = this.head;
        Node prev = null;

        while(count!=index) {
            prev = curr;
            curr = curr.next;
            count++;
        }

        prev.next = curr.next;
        curr.next = null;
        this.size--;
        return curr.value;
    }


    //O(n)
    public int add(int index, String value) {
        if(index > size) {
            return -1;
        }

        if(index == 0) {
            this.addFirst(value);
            return 1;
        }

        if(index == size) {
            this.addLast(value);
            return 1;
        }


        int count = 0;
        Node curr = this.head;
        Node prev = null;

        while(count!=index) {
            prev = curr;
            curr = curr.next;
            count++;
        }

        Node node = new Node(value);
        prev.next = node;
        node.next = curr;
        this.size++;
        return 1;

    }
}
//======================



public class Main {
    public static void main(String[] args) {
        LinkedList list = new LinkedList();

        list.addLast("Anmol");
        list.addLast("Akanksha");
        list.addLast("Arjun");
        list.addLast("Ashok");
        

        String curr = list.removeFirst().value;

        String last = list.removeLast().value;
        
        list.addFirst("Chandresh");

        String el = list.remove(0);

        list.add(2, "Shirhaan");

    }

}
