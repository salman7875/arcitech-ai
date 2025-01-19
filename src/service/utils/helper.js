export const transformToObjectArray = (obj) => {
  return Object.entries(obj).map(([key, value]) => ({ item: key, value }));
};
