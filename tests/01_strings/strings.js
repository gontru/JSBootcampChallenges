/* eslint-disable no-unused-vars */

function doesInclude(str, letter) {
    if (str.includes(letter)){
      return true
    } else {
      return false
    }

}

function isPalindrome(str) {
  // use split() to turn string to array => 
    let strToArray = str.split(""); // ex.. hello.splt(""); => [h, e, l, l, o]
  // use array method (reverse) to reverse array
    let reverseArray = strToArray.reverse(); 
    //ex reverArray = [h, e, l, l, o] => .reverse => [o, l, l, e, h]
    let joinArray = reverseArray.join(""); // had to use .join to return to string otherwise would not pass last test.
    if (str === joinArray) {
      return true;
    } else {
      return false;

}
}


function cap(str, letter) {
  const index = str.indexOf(letter)
  const returnLetter =str[index = 1].toUppercase()
   if (index !== -1){
    return returnLetter;
}else {
    return "sorry not found"
  }
}

function firstCharacter(str1, str2) {
  if (str1.charAt(0).toLowerCase() === str2.charAt(0).toLowerCase() ){
    return true;
  }else {
  return false;
  }

}

module.exports = {
  cap, firstCharacter, doesInclude, isPalindrome,
};
