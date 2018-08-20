import LinkedList from '../linked-list/linked-list';

export default class Queue_LinkedList {
  constructor() {
    this._linkedList = new LinkedList();
  }

  enqueue(value) {
    this._linkedList.append(value);
    return this;
  }

  dequeue() {
    if (this.isEmpty()) { return null; }
    const node = this._linkedList.deleteHead();
    return node ? node.value : null;
  }

  peek() {
    if (this.isEmpty()) { return null; }

    return this._linkedList.head.value;
  }

  isEmpty() {
    if (!this._linkedList.head) { return true; }

    return false;
  }

  toString(callback = (x) => x) {
    return this._linkedList .toString(callback);
  }
}
