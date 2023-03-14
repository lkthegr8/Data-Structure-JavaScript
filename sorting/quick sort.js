// brings the pivot element to its correct position
// by default we have considered first element as pivot
const pivotHelper = (arr, start, end) => {
  let pivot = arr[start];
  let swapIndex = start;
  for (let i = start + 1; i <= end; i++) {
    if (pivot > arr[i]) {
      swapIndex++;
      [arr[swapIndex], arr[i]] = [arr[i], arr[swapIndex]];
    }
  }
  [arr[swapIndex], arr[start]] = [arr[start], arr[swapIndex]];
  return swapIndex;
};

pivotHelper([4, 8, 5, 7, 6, 3, 9, 2, 1]);

const quickSort = (array, left = 0, right = array.length - 1) => {
  if (left < right) {
    let pivotIndex = pivotHelper(array, left, right);
    // left side
    quickSort(array, left, pivotIndex - 1);
    // right side
    quickSort(array, pivotIndex + 1, right);
  }
  return array;
};

console.log(quickSort([4, 8, 5, 7, 6, 3, 9, 2, 1]));
