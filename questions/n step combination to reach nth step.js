// you ar given a input of nth step
// you are on 0th step
// you can move up any step upto current position step
// how many combination to reaach the nth step

const stepnCombinations = (nth) => {
  tempCalculatedValues = [];
  // default statment
  tempCalculatedValues[0] = 1;

  for (let i = 1; i <= nth; i++) {
    let tempArray = [];

    tempArray.push(i);
    for (let k = 1; k < i; k++) {
      tempArray.push(tempCalculatedValues[i - k]);
    }
    tempCalculatedValues[i] = 0;
    for (let j = 0; j < tempArray.length; j++) {
      tempCalculatedValues[i] += tempArray[j];
    }
  }
  return tempCalculatedValues[nth];
};

const stepVariableCombinations = (nth, varArray) => {
  tempCalculatedValues = [];
  // default statment
  tempCalculatedValues[nth] = 1;

  for (let i = nth - 1; i >= 0; i--) {
    tempCalculatedValues[i] = 0;
    for (let k = 0; k <= varArray[i]; k++) {
      tempCalculatedValues[i] += tempCalculatedValues[k + i];
    }
  }
  return tempCalculatedValues[0];
};

// console.log(stepnCombinations(4));
console.log(stepVariableCombinations(10, [3, 3, 0, 2, 1, 2, 4, 2, 0, 0]));
