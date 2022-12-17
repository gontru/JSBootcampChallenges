/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-vars */
function factorial(num) {
  let total = 1;
  for (let i = 1; i <= num; i++){
   total *= i;
} return total;
} 

function stringReverse(str) {
 let newStr = '';
 for (let i = str.Length -1;i >=0; i--)
 { newStr += str[i]

 } return newStr;
}

// do not use built in slice method.
function slicer(originalString, startIdx, endIdx) {
  let newStr =''
    if (startIdx === undefined){
      return originalString;
    }
    else if (endIdx === undefined){
    endIdx = originalString.Length;
}
    for (let i = startIdx; i< endIdx; i++){
      newStr += originalString[i];
    } return newStr;
}

function addTheEvens(num) {
let total1 = 0;
 for (let i =0; i<= num; i += 2){
  total1 += i;
//   if (i % 2 === 0) {
//     total += i
//   }
//  } return total;
} return total1;
}

module.exports = {
  factorial, stringReverse, slicer, addTheEvens,
};
