class Node {
  constructor(value) {
    this.value = value;
    this.nextNode = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  // 1. append
  append(value) {
    const newNode = new Node(value);

    if (this.head === null) {
      this.head = newNode;
      return;
    }

    let curr = this.head;
    while (curr.nextNode !== null) {
      curr = curr.nextNode;
    }

    curr.nextNode = newNode;
  }

  // 2. prepend
  prepend(value) {
    const newNode = new Node(value);
    newNode.nextNode = this.head;
    this.head = newNode;
  }

  // 3. size
  size() {
    let count = 0;
    let curr = this.head;

    while (curr !== null) {
      count++;
      curr = curr.nextNode;
    }

    return count;
  }

  // 4. head value
  headValue() {
    return this.head ? this.head.value : undefined;
  }

  // 5. tail
  tail() {
    if (!this.head) return undefined;

    let curr = this.head;
    while (curr.nextNode !== null) {
      curr = curr.nextNode;
    }

    return curr.value;
  }

  // 6. at index
  at(index) {
    let curr = this.head;
    let i = 0;

    while (curr !== null) {
      if (i === index) return curr.value;
      curr = curr.nextNode;
      i++;
    }

    return undefined;
  }

  // 7. pop (⚠️ removing HEAD as per your spec)
  pop() {
    if (!this.head) return undefined;

    const value = this.head.value;
    this.head = this.head.nextNode;
    return value;
  }

  // 8. contains
  contains(value) {
    let curr = this.head;

    while (curr !== null) {
      if (curr.value === value) return true;
      curr = curr.nextNode;
    }

    return false;
  }

  // 9. findIndex
  findIndex(value) {
    let curr = this.head;
    let i = 0;

    while (curr !== null) {
      if (curr.value === value) return i;
      curr = curr.nextNode;
      i++;
    }

    return -1;
  }

  // 10. toString
  toString() {
    if (!this.head) return "";

    let curr = this.head;
    let result = "";

    while (curr !== null) {
      result += `( ${curr.value} ) -> `;
      curr = curr.nextNode;
    }

    return result + "null";
  }

  // EXTRA: insertAt
  insertAt(index, ...values) {
    if (index < 0 || index > this.size()) {
      throw new RangeError("Index out of bounds");
    }

    if (index === 0) {
      for (let i = values.length - 1; i >= 0; i--) {
        this.prepend(values[i]);
      }
      return;
    }

    let curr = this.head;
    let i = 0;

    while (i < index - 1) {
      curr = curr.nextNode;
      i++;
    }

    let next = curr.nextNode;

    for (let val of values) {
      const newNode = new Node(val);
      curr.nextNode = newNode;
      curr = newNode;
    }

    curr.nextNode = next;
  }

  // EXTRA: removeAt
  removeAt(index) {
    if (index < 0 || index >= this.size()) {
      throw new RangeError("Index out of bounds");
    }

    if (index === 0) {
      return this.pop();
    }

    let curr = this.head;
    let i = 0;

    while (i < index - 1) {
      curr = curr.nextNode;
      i++;
    }

    const removed = curr.nextNode.value;
    curr.nextNode = curr.nextNode.nextNode;

    return removed;
  }
}

module.exports = LinkedList;
