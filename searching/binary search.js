// returns the found element index else -1
const binarySearch = (array, element) => {
  let left = 0;
  let right = array.length - 1;

  while (right >= left) {
    let middleIndex = Math.floor((right + left) / 2);
    if (array[middleIndex] == element) {
      return middleIndex;
    }
    if (element < array[middleIndex]) {
      right = middleIndex - 1;
    } else {
      left = middleIndex + 1;
    }
  }

  return -1;
};

let array = [2, 3, 4, 5, 1, 6, 8, 7, 9, 0].sort();
console.log("array = ", array);
console.log("array length = ", array.length);
console.log(binarySearch(array, 9));
