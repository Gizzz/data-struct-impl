export default class PriorityQueue {
  constructor() {
    this._queue = [];
  }

  add(value, priority = 0) {
    this._queue.push({ value, priority })
  }

  peek() {
    if (this._queue.length === 0) {
      return null;
    }

    let itemToReturn = this._queue[0];

    this._queue.forEach((item, index) => {
      if (index === 0) { return; }

      if (item.priority < itemToReturn.priority) {
        itemToReturn = item;
      }
    });

    return itemToReturn.value;
  }

  poll() {
    if (this._queue.length === 0) {
      return null;
    }

    let indexToRemove = 0;
    let itemToReturn = this._queue[indexToRemove];

    this._queue.forEach((item, index) => {
      if (index === 0) { return; }

      if (item.priority < itemToReturn.priority) {
        itemToReturn = item;
        indexToRemove = index;
      }
    });

    this._queue.splice(indexToRemove, 1);

    return itemToReturn.value;
  }

  hasValue(value) {
    if (this._queue.length === 0) { return false; }

    let isFound = false;
    
    this._queue.forEach((item) => {
      if (item.value === value) {
        isFound = true;
      }
    });

    return isFound;
  }

  changePriority(value, priority) {
    if (this._queue.length === 0) { return; }

    this._queue.forEach((item) => {
      if (item.value === value) {
        item.priority = priority;
        return;
      }
    });
  }

  // remove(value, customFindingComparator) {}

  // findByValue(value) {}

  // compareValue(a, b) {}

  // comparePriority(a, b) {}
}
