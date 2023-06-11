class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  addLast(value) {
    if (this.head === null) {
      this.head = new Node(value);
      this.tail = this.head;
    } else {
      const node = new Node(value);
      this.tail.next = node;
      this.tail = node;
    }
    this.size++;
  }

  removeFirst() {
    if (this.head === null) {
      return null;
    }
    const curr = this.head;
    this.head = this.head.next;
    curr.next = null;
    this.size--;
    return curr;
  }

  removeLast() {
    if (this.size === 0) {
      return null;
    }
    let curr;
    if (this.size === 1) {
      curr = this.head;
      this.head = null;
      this.tail = null;
    } else {
      curr = this.head;
      while (curr.next.next !== null) {
        curr = curr.next;
      }
      const temp = curr.next;
      curr.next = null;
      this.tail = curr;
      curr = temp;
    }
    this.size--;
    return curr;
  }

  addFirst(value) {
    const node = new Node(value);
    node.next = this.head;
    this.head = node;
    this.size++;
  }

  remove(index) {
    if (index + 1 > this.size) {
      return null;
    }

    if (index === 0 || this.size === 1) {
      const temp = this.removeFirst();
      return temp.value;
    }

    let count = 0;
    let curr = this.head;
    let prev = null;

    while (count !== index) {
      prev = curr;
      curr = curr.next;
      count++;
    }

    prev.next = curr.next;
    curr.next = null;
    this.size--;
    return curr.value;
  }

  add(index, value) {
    if (index > this.size) {
      return -1;
    }

    if (index === 0) {
      this.addFirst(value);
      return 1;
    }

    if (index === this.size) {
      this.addLast(value);
      return 1;
    }

    let count = 0;
    let curr = this.head;
    let prev = null;

    while (count !== index) {
      prev = curr;
      curr = curr.next;
      count++;
    }

    const node = new Node(value);
    prev.next = node;
    node.next = curr;
    this.size++;
    return 1;
  }
}

const list = new LinkedList();

list.addLast("Anmol");
list.addLast("Akanksha");
list.addLast("Arjun");
list.addLast("Ashok");

const curr = list.removeFirst().value;

const last = list.removeLast().value;

list.addFirst("Chandresh");

const el = list.remove(0);

list.add(2, "Shirhaan");
