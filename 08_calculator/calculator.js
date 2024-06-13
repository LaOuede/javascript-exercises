const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
  if (array.length > 0) {
    return array.reduce((acc, num) => acc + num, 0);
  }
  return 0;
};

const multiply = function(array) {
  if (array.length > 0) {
    return array.reduce((acc, num) => acc * num, 1);
  }
  return 0;
};

const power = function(num, power) {
  return Math.pow(num, power);
};

const factorial = function(num) {
  let res = 1;

	for (let i = num; i > 0; i--) {
    res *= i;
  }
  return res;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
