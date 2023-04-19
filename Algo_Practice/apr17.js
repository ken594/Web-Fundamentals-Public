/* 
  Consult the Oracle

  Given an array of wise answers, randomly choose a response and return it
*/

var lifesAnswers = [
  "It is certain.",
  "It is decidedly so.",
  "Without a doubt.",
  "Yes – definitely.",
  "You may rely on it.",
  "As I see it, yes.",
  "Most likely.",
  "Outlook good.",
  "Yes.",
  "Signs point to yes.",
  "Reply hazy, try again.",
  "Ask again later.",
  "Better not tell you now.",
  "Cannot predict now.",
  "Concentrate and ask again.",
  "Don't count on it.",
  "My reply is no.",
  "My sources say no.",
  "Outlook not so good.",
  "Very doubtful.",
];

/**
 * Given an array of wise answers, randomly choose a response and return it
 * @param {Array<any>} arr
 * @returns {string} the randomly chosen oracle response
 */
function consultTheOracle(arr) {
  // code here
}

/* 
    From zoom interview with student in year 2020
  
    Given one array,
    return a new array that contains all of the original items duplicated twice
  */

const arr1 = ["a", "b", "c"];
const expected1 = ["a", "b", "c", "a", "b", "c"];

const arr2 = ["a"];
const expected2 = ["a", "a"];

const arr3 = [];
const expected3 = [];

/**
 * Creates a new array that is a concatenation of the given array with itself.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<any>} items
 * @returns {Array<any>} The resulting concatenation of the given arr with
 *    itself.
 */
// function concatArrWithSelf(items) {
//   const res = [];
//   for (var i = 0; i < items.length; i++) {
//     res[i] = items[i];
//     res[items.length + i] = items[i];
//   }
//   return res;
// }

function concatArrWithSelf(items) {
  const res = [];
  var size = items.length;
  for (var i = 0; i < size + size; i++) {
    res[i] = items[i % size];
  }
  return res;
}

console.log(concatArrWithSelf(arr2));
