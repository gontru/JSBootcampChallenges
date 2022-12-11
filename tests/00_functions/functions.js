/* eslint-disable arrow-body-style */
/* eslint-disable consistent-return */

function max(num1, num2, num3) {
      return Math.max(num1, num2, num3);
}

function addUnknown(num1, num2, num3 = 0, num4 = 0, num5 = 0) {
    return num1 + num2 + num3 + num4 + num5
}

function evenOrOdd(num1) {
    if (num1 % 2 === 0){
      return 'even'
  } else return 'odd'

  }

function operator(num1, num2,num3) {
    if (num1 + num2 === num3){
    return "plus"
    } else if (num1 - num2 === num3){
      return "minus"
    } else if (num1 * num2 === num3){
      return "multiply"
    } else if (num1 / num2 === num3){
      return "divide"
    } else 
      return null
}

module.exports = {
  max, addUnknown, evenOrOdd, operator,
};
