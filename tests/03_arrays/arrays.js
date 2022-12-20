const { interfaces } = require("mocha");

/* eslint-disable no-unused-vars */
function multiply(arr) {
  let newArray = arr.flat();
  for (let i = 0; i < arr.length; i++){
    const multi = newArray[i] * arr[i]
  }
  return multi
}

function includesCopy(arr, searchValue) {
  


}

function inventory(arr) {

}

function camelCase(str) {

}

function joiner() {

}

module.exports = {
  multiply, includesCopy, inventory, camelCase, joiner,
};
