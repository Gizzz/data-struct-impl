export default class Stack {
  constructor() {
    this._array = [];
  }

  /**
   * 
   * @param {*} value
   * @returns {Stack}
   */
  push(value) {
    this._array.push(value);
    return this;
  }

  /**
   * @returns {*}
   */
  pop() {
    if (this.isEmpty()) { return null; }

    return this._array.pop();
  }

  /**
   * @returns {*}
   */
  peek() {
    if (this.isEmpty()) { return null; }

    const lastIndex = this._array.length - 1;
    return this._array[lastIndex];
  }

  isEmpty() {
    if (this._array.length === 0) {
      return true;
    }

    return false;
  }

  toString(callback = x => x) {
    return this._array.map(x => callback(x)).toString();
  }

  toArray() {
    const reversedArray = this._array
      .map(x => x)
      .reverse();
      
    return reversedArray;
  }
}
