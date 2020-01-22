export const spliceRandomElementFromArr = (arr) => {
  const index = Math.floor(Math.random() * arr.length);
  return arr.splice(index, 1)[0];
};

export const getArrCopy = (arr) => {
  return [...arr]
}