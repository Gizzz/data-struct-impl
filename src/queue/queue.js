export default class Queue {
  constructor() {
    this._array = [];
  }

  enqueue(value) {
    this._array.push(value);
    return this;
  }

  dequeue() {
    if (this.isEmpty()) { return null; }

    return this._array.shift();
  }

  peek() {
    if (this.isEmpty()) { return null; }

    return this._array[0];
  }

  isEmpty() {
    if (this._array.length === 0) { return true; }

    return false;
  }

  toString(callback = x => x) {
    return this._array
      .map(x => callback(x))
      .toString();
  }
}
