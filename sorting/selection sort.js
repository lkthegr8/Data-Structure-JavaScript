let arr = [4, 8, 5, 7, 6, 3, 9, 2, 1];

const selectionSort = (array) => {
  for (let i = 0; i < array.length - 1; i++) {
    let tempMaxIndex = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[tempMaxIndex]) {
        tempMaxIndex = j;
      }
    }
    [array[tempMaxIndex], array[i]] = [array[i], array[tempMaxIndex]];
  }
  return array;
};

console.log(selectionSort(arr));
