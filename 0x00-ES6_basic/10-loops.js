export default function appendToEachArrayValue(array, appendString) {
  comst res = [];
  for (const idx of array) {
    res.push(`${appendString}${idx}`);
  }

  return res;
}
