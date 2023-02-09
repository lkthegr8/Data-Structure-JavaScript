// returns the found element index else -1
const linearSearch = (array, element) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] == element) {
      return i;
    }
  }
  return -1;
};

let array = [2, 3, 4, 5, 1, 6, 3, 7, 9, 0];
console.log("array length=", array.length);
console.log(linearSearch(array, 9));
