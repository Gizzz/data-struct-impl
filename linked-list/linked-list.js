class LinkedList {
  constructor(comparatorFn) {
    this.head = null;
    this.tail = null;
    this.comparatorFn = comparatorFn;
  }

  isValuesEqual(a, b) {
    if (this.comparatorFn) {
      return this.comparatorFn(a, b) === 0;
    }

    return a === b;
  }

  prepend(value) {
    const newNode = new LinkedListNode(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      
      return this;
    }

    this.head.prev = newNode;
    newNode.next = this.head;
    this.head = newNode;

    return this;
  }

  append(value) {
    const newNode = new LinkedListNode(value);

    if (!this.tail) {
      this.head = newNode;
      this.tail = newNode;
      return this;
    }

    this.tail.next = newNode;
    newNode.prev = this.tail;
    this.tail = newNode;

    return this;
  }

  find({ value = undefined, callback = undefined } = {}) {
    if (!this.head) {
      return null;
    }

    let currentNode = this.head;
    while(currentNode) {
      if (callback && callback(currentNode.value)) {
        return currentNode;
      }

      if (value && this.isValuesEqual(value, currentNode.value) ) {
        return currentNode;
      }

      currentNode = currentNode.next;
    }

    return null;
  }

  delete(value) {
    if (!this.head) {
      return null;
    }

    if (this.head === this.tail) {
      const deletedNode = this.head;
      this.head = this.tail = null;

      return deletedNode;
    }

    let currentNode = this.head;
    let nodeToDelete = null;

    while (currentNode) {
      if (currentNode.value === value) {
        nodeToDelete = currentNode;
        
        if (nodeToDelete === this.head) {
          this.head = this.head.next;
          this.head.prev = null;
        } else if (nodeToDelete === this.tail) {
          this.tail = this.tail.prev;
          this.tail.next = null;
        } else {
          nodeToDelete.prev.next = nodeToDelete.next;
          nodeToDelete.next.prev = nodeToDelete.prev;
        }

        nodeToDelete.prev = null;
        nodeToDelete.next = null;
        return nodeToDelete;
      }

      currentNode = currentNode.next;
    }

    return null;
  }

  deleteTail() {
    if (!this.tail) {
      return null;
    }
    
    const deletedNode = this.tail;

    if (this.head === this.tail) {
      this.head = this.tail = null;
      return deletedNode;
    }

    const prevNode = this.tail.prev;
    prevNode.next = null;
    this.tail.prev = null;
    this.tail = prevNode;

    return deletedNode;
  }

  deleteHead() {
    if (!this.head) {
      return null;
    }

    const deletedNode = this.head;

    if (this.head === this.tail) {
      this.head = this.tail = null;
      return deletedNode;
    }

    const nextNode = this.head.next;
    nextNode.prev = null;
    this.head.next = null;
    this.head = nextNode;

    return deletedNode;
  }

  fromArray(values) {
    values.forEach(element => {
      this.append(element);
    });
  }

  toArray() {
    const nodes = [];

    let currentNode = this.head;
    while(currentNode) {
      nodes.push(currentNode);
      currentNode = currentNode.next;
    }

    return nodes;
  }

  toString(callback) {
    return this.toArray().map(node => node.toString(callback)).toString();
  }
}

class LinkedListNode {
  constructor(value, prev = null, next = null) {
    this.value = value;
    this.prev = prev;
    this.next = next;
  }

  toString(callback) {
    return callback ? callback(this.value) : `${this.value}`;
  }
}

export default LinkedList;
