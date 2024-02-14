const groceriesList = () => {
  const myMap = new Map();
  const food = {
    Apples: 10,
    Tomatoes: 10,
    Pasta: 1,
    Rice: 1,
    Banana: 5,
  };
  for (const key of Object.keys(food)) {
    myMap.set(key, food[key]);
  }
  return myMap;
};

export default groceriesList;
