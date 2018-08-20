import LinkedList from '../linked-list/linked-list';

const defaultHashTableSize = 32;

export default class HashTable {
  constructor(hashTableSize = defaultHashTableSize) {
    this.buckets = Array(hashTableSize)
      .fill(null)
      .map(() => []);
    this.keys = {};
  }

  // Converts key string to hash number.
  hash(key) {
    const hash = Array.from(key).reduce(
      (hashAccumulator, keySymbol) => (hashAccumulator + keySymbol.charCodeAt(0)),
      0,
    );

    return hash % this.buckets.length;
  }

  set(key, value) {
    const keyHash = this.hash(key);
    this.keys[key] = keyHash;

    const keyBucket = this.buckets[keyHash];

    if (keyBucket.length === 0) {
      keyBucket.push({ key, value });
    } else {
      const bucketEntry = keyBucket.find(x => x.key === key);

      if (!bucketEntry) {
        keyBucket.push({ key, value });
      } else {
        bucketEntry.value = value;
      }
    }
  }

  delete(key) {
    const keyHash = this.hash(key);
    const keyBucket = this.buckets[keyHash];

    if (keyBucket.length === 0) { return null }

    const indexToDelete = keyBucket.findIndex(x => x.key === key);
    if (indexToDelete === -1) {
      return null;
    }

    const bucketEntry = keyBucket[indexToDelete];
    keyBucket.splice(indexToDelete, 1);

    return bucketEntry;
  }

  get(key) {
    const keyHash = this.hash(key);
    const keyBucket = this.buckets[keyHash];

    if (keyBucket.length === 0) { return undefined }

    const bucketEntry = keyBucket.find(x => x.key === key);
    return bucketEntry ? bucketEntry.value : undefined;
  }

  has(key) {
    const keyHash = this.hash(key);
    const keyBucket = this.buckets[keyHash];

    if (keyBucket.length === 0) { return false }

    const bucketEntry = keyBucket.find(x => x.key === key);
    return bucketEntry ? true : false;
  }

  getKeys() {
    return Object.keys(this.keys);
  }

  stringifyBucket(index, bucketEntryCallback) {
    const bucket = this.buckets[index];

    const stringified = bucket
      .map(x => bucketEntryCallback ? bucketEntryCallback(x) : x.toString())
      .join(',');
    
    return stringified;
  }
}
