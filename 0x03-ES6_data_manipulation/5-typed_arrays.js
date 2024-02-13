export default function createInt8TypedArray(length, position, value) {
  if (position <= -1 || position >= length) {
    throw Error('Position outside range');
  }
  const createdBuffer = new ArrayBuffer(length);
  const createdInt8 = new Int8Array(createdBuffer, 0, length);
  createdInt8.set([value], position);
  return new DataView(createdBuffer);
}
