/* 
  Given array and an additional value, insert this value at the beginning of
  the array by making space for it at the beginning of the array.
  return the new length of the array.
  
  Do this without using any built-in array methods.
*/

const arra1 = [1, 2, 3];
const newItem1 = 0;
const expecteda1 = 4;
// after function is called, arr1 should be:
const arr1Expected = [0, 1, 2, 3];

const arra2 = [];
const newItem2 = "a";
const expecteda2 = 1;
// after function is called, arr2 should be:
const arr2Expected = ["a"];

/**
 * Shifts all items to the right by one to make space to add the given new item
 * to the front of the given array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<any>} items An array of any kind of items.
 * @param {any} newItem To add to front.
 * @returns {number} The new length of items.
 */
function unshift(items, newItem) {
  // code here
  items.push(items[items.length - 1]);
  for (let i = items.length - 2; i > 0; i--) {
    items[i] = items[i - 1];
  }
  items[0] = newItem;
  return items.length;
}

console.log(unshift(arra1, newItem1));
console.log(arra1);

console.log(unshift(arra2, newItem2));
console.log(arra2);

/* 
  Given an array, remove and
  return the value at the beginning of the array and then shift the remaining items down to fill the empty space.

  Do this without using any built-in array methods except pop().
*/

const arr1 = [1, 2, 3];
const expected1 = 1;
// after running function arr1 should now be:
const expectedArr1 = [2, 3];

const arr2 = ["a", "b", "c", "d"];
const expected2 = "a";
// after running function arr2 should now be:
const expectedArr2 = ["b", "c", "d"];

const arr3 = [];
const expected3 = undefined;
const expectedArr3 = [];

/**
 * Shifts every item of the array to the left by 1 so that the first item is
 * removed and returned.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<any>} items An array of any kind of items.
 * @returns {any} The removed value previously at idx 0.
 */
function shift(items) {
  // code here
  let res = items[0];
  if (res == undefined) return res;
  for (let i = 1; i < items.length; i++) {
    items[i - 1] = items[i];
  }
  items.pop();
  return res;
}

console.log(shift(arr1));
console.log(arr1);
console.log(shift(arr2));
console.log(arr2);
console.log(shift(arr3));
console.log(arr3);
