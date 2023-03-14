// you ar given a input of nth step
// you are on 0th step
// you can move up 1, 2, or 3 step
// how many combination to reaach the nth step

const step3Combinations = (nth) => {
  tempCalculatedValues = [];
  // default statment
  tempCalculatedValues[0] = 1;
  let a = 0,
    b = 0,
    c = 0;
  for (let i = 1; i <= nth; i++) {
    if (i - 1 >= 0) {
      a = tempCalculatedValues[i - 1];
    }
    if (i - 2 >= 0) {
      b = tempCalculatedValues[i - 2];
    }
    if (i - 3 >= 0) {
      c = tempCalculatedValues[i - 3];
    }
    tempCalculatedValues[i] = a + b + c;
  }
  return tempCalculatedValues[nth];
};

console.log(step3Combinations(4));
