let arr = [4, 8, 5, 7, 6, 3, 9, 2, 1];

// here we are comparing the current emlemnt from its previous sorted elements and inserting it on its sorted position
const insertionSort = (array) => {
  // we start by the second index as the first on will be sorted by default as a single digit
  for (let i = 1; i < array.length; i++) {
    let currentValue = array[i];
    // limiting the j and specifying the terminating condition
    for (var j = i - 1; j >= 0 && array[j] > currentValue; j--) {
      // shifting of array elements forward to make space for "currentValue"
      array[j + 1] = array[j];
    }
    console.log(j);
    // array[j] < currentValue  , then the position of "currentValue" will be array[j+1]. As the condition specified in the for loop becomes false
    array[j + 1] = currentValue;
  }
  return array;
};

console.log(insertionSort(arr));
