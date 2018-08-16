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
    return this._array.pop();
  }

  /**
   * @returns {*}
   */
  peek() {
    const lastIndex = this._array.length - 1;
    return this._array[lastIndex];
  }

  toString() {
    return this._array.toString();
  }
}
