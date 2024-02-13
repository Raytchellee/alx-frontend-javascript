export default const cleanSet = (set, startString) => {
  if (startString === undefined || startString.length === 0) {
    return '';
  }
  return [...set]
    .filter((word) => (word !== undefined ? word.startsWith(startString) : ''))
    .map((word) => (word !== undefined ? word.slice(startString.length) : ''))
    .join('-');
};

