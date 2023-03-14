// it is a type of non comparision type of sort
// it used the digits position
// the loops depend on the length of the number
// it uses 10 buckets

// gets number from digit place eg:- 10s, 100s
const getDigit = (number, position) => {
  return Math.floor((Math.abs(number) / Math.pow(10, position)) % 10);
};

const digitCount = (num) => {
  if (num == 0) {
    return 1;
  }
  return Math.floor(Math.log10(Math.abs(num))) + 1;
};

const mostDigits = (array) => {
  let maxDigits = 0;
  for (let i = 0; i < array.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(array[i]));
  }
  return maxDigits;
};

const radixSort = (numbers) => {
  let maxDigits = mostDigits(numbers);
  for (let k = 0; k < maxDigits; k++) {
    let digitBuckets = Array.from({ length: 10 }, () => []);
    for (let i = 0; i < numbers.length; i++) {
      digitBuckets[getDigit(numbers[i], k)].push(numbers[i]);
    }
    numbers = [].concat(...digitBuckets);
  }
  return numbers;
};

console.log(radixSort([33, 5, 4, 345, 354, 57, 4568, 568, 345245, 234578]));
