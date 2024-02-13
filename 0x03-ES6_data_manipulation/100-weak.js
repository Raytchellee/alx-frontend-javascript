export const weakMap = new WeakMap();

export function queryAPI(endpoint) {
  let url = 0;
  if (weakMap.get(endpoint)) url = weakMap.get(endpoint);
  weakMap.set(endpoint, url + 1);
  if (url + 1 > 4) throw new Error('Endpoint load is high');
}
