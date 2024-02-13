export default const updateUniqueItems = (myMap) => {
  if (myMap instanceof Map) {
    for (const [key, val] of myMap.entries()) {
      if (val === 1) {
        myMap.set(key, 100);
      }
    }
    return myMap;
  }
  throw new Error('Cannot process');
};
