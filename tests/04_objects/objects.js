/* eslint-disable no-restricted-syntax */
/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-vars */
function deleteProp(obj, prop) {
  delete obj[prop];
  return obj;
} 

function numObjectProps(obj) {
  const keys = Object.keys(obj)
  return keys.length;
}

function shoppingCart(cart) {
const item = Object.amount[values];
let sum = 0;
    for (let i = 0; i < item.length; i += 1){
      sum += item[i];
   } return sum;
}

function compareObjects(obj1, obj2) {

}

module.exports = {
  compareObjects, deleteProp, numObjectProps, shoppingCart,
};
